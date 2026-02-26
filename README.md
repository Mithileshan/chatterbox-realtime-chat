# ChatterBox – Real-Time Chat Application

ChatterBox is a real-time room-based chat application built using Node.js, Express, and Socket.IO. Users can join different chat rooms, send messages instantly, and see real-time presence updates.

## ✨ Features

- **Multi-room chat** – Join different chat rooms (JavaScript, Python, PHP, C#, Ruby, Java)
- **Real-time messaging** – Instant WebSocket-based communication
- **Typing indicators** – See who's currently typing
- **Join/leave notifications** – Get notified when users enter or leave
- **Active user list** – See all users in the current room
- **Message timestamps** – All messages are time-stamped

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data Caching**: Redis (for scalability)
- **Task Management**: Moment.js (timestamps)
- **Dev Tools**: Nodemon

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Mithileshan/chatterbox-realtime-chat.git
cd chatterbox-realtime-chat

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit your browser at: **http://localhost:3000**

### Environment Variables

Copy `.env.example` to `.env` and configure:

```
PORT=3000
```

## 📋 How to Use

1. Open the app at `http://localhost:3000`
2. Enter your username
3. Select a chat room
4. Click "Join Chat"
5. Start messaging in real-time!
6. Click "Leave Room" to disconnect

## 🗺 Planned Enhancements

- [ ] **MongoDB Integration** – Persist chat history across sessions
- [ ] **Message History** – Show last 50 messages when joining a room
- [ ] **Authentication** – JWT-based user authentication
- [ ] **File & Image Sharing** – Upload and share media in chat
- [ ] **Rate Limiting** – Anti-spam protection
- [ ] **Private Messaging** – Direct messages between users
- [ ] **Emoji Support** – Rich message formatting
- [ ] **Deployment** – Deploy on Render/Heroku

## 🏗 Project Structure

```
chatterbox-realtime-chat/
├── public/              # Frontend files
│   ├── index.html      # Join room page
│   ├── chat.html       # Chat interface
│   ├── js/             # Client-side JavaScript
│   └── css/            # Stylesheets
├── utils/              # Helper functions
│   ├── users.js        # User management
│   └── messages.js     # Message formatting
├── server.js           # Express app & Socket.IO setup
├── package.json        # Dependencies
└── .env.example        # Environment template
```

## 🔌 API Events (Socket.IO)

### Client → Server
- `joinRoom` – User joins a room
- `chatMessage` – User sends a message
- `disconnect` – User leaves the chat

### Server → Client
- `message` – Receive chat messages
- `roomUsers` – Get users in the room

## 🏥 Health & Monitoring

### Health Endpoint
Check server status at `/health`:

```bash
curl http://localhost:3000/health
```

Response:
```json
{
  "status": "✅ healthy",
  "uptime": 123.45,
  "timestamp": "2026-02-26T21:28:43.825Z",
  "environment": "development"
}
```

### Rate Limiting
- **Protection**: 100 requests per 15-minute window per IP
- **Purpose**: Prevent spam and DoS attacks
- **Global**: Applied to all HTTP routes

## 🎨 Features in Action

### Join Screen
Clean and intuitive UI to select username and room before entering the chat.

### Real-Time Chat
- Live messaging across connected users
- Room-based conversations (JavaScript, Python, PHP, C#, Ruby, Java)
- User list showing online members
- System notifications for join/leave events
- Message timestamps for all activity

### Split-view Design
- **Left sidebar**: Active room name and connected users
- **Main area**: Live chat messages with timestamps
- **Input area**: Type and send messages in real-time
- **Header**: Room controls and leave button

## 📸 Screenshots

**Join Page - Select Room:**
![Join Page](https://img.shields.io/badge/ChatterBox-Join%20Page-blue)

**Real-Time Chat - Two Users:**
![Chat Interface](https://img.shields.io/badge/ChatterBox-Chat%20Live-brightgreen)

## 🛡 License

MIT License

## 📝 Credits

Initial scaffold adapted from **bradtraversy/chatcord**. This version includes portfolio-focused modifications, UI improvements, and is prepared for production enhancements.

---

Built with ❤️ by **Mithileshan**
