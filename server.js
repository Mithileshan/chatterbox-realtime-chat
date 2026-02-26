const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const rateLimit = require("express-rate-limit");
const formatMessage = require("./utils/messages");
const createAdapter = require("@socket.io/redis-adapter").createAdapter;
const redis = require("redis");
require("dotenv").config();
const { createClient } = redis;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Rate limiting middleware - limit requests to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Apply rate limiter to all requests
app.use(limiter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "✅ healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

const botName = "ChatterBox Bot";

// Optional Redis adapter for multi-instance support
(async () => {
  try {
    pubClient = createClient({ url: "redis://127.0.0.1:6379" });
    await pubClient.connect();
    subClient = pubClient.duplicate();
    io.adapter(createAdapter(pubClient, subClient));
    console.log("✅ Redis connected - multi-instance mode enabled");
  } catch (err) {
    console.log("⚠️  Redis not available - running in single-instance mode");
  }
})();

// Run when client connects
io.on("connection", (socket) => {
  console.log(io.of("/").adapter);
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatterBox!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🎤 ChatterBox is listening on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
