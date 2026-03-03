# ChatterBox – Real-Time Chat Application

ChatterBox is a real-time room-based chat application built using Node.js, Express, and Socket.IO. Users can join different chat rooms, send messages instantly, and see real-time presence updates.

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

## How to Use

1. Open the app at `http://localhost:3000`
2. Enter your username
3. Select a chat room
4. Click "Join Chat"
5. Start messaging in real-time!
6. Click "Leave Room" to disconnect


## 🔌 API Events (Socket.IO)

### Client → Server
- `joinRoom` – User joins a room
- `chatMessage` – User sends a message
- `disconnect` – User leaves the chat

### Server → Client
- `message` – Receive chat messages
- `roomUsers` – Get users in the room

## Health & Monitoring

### Health Endpoint
Check server status at `/health`:

```bash
curl http://localhost:3000/health
```

Response:
```json
{
  "status": " healthy",
  "uptime": 123.45,
  "timestamp": "2026-02-26T21:28:43.825Z",
  "environment": "development"
}
```

### Rate Limiting
- **Protection**: 100 requests per 15-minute window per IP
- **Purpose**: Prevent spam and DoS attacks
- **Global**: Applied to all HTTP routes

## � Screenshots

### Join Page - Select Room
Users can select their username and choose from available chat rooms (JavaScript, Python, PHP, C#, Ruby, Java) before joining the chat.

![ChatterBox Join Page](https://raw.githubusercontent.com/Mithileshan/chatterbox-realtime-chat/main/screenshots/join_page.jpeg)

### Real-Time Chat - Two Users
Live messaging interface showing active users in a room, message history with timestamps, and real-time message delivery between participants.

![ChatterBox Chat Live](https://raw.githubusercontent.com/Mithileshan/chatterbox-realtime-chat/main/screenshots/chat_live.jpeg)

## �🛡 License

MIT License

---

Built with ❤️ by **Mithileshan**
