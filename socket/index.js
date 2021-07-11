import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const port = process.env.PORT || 4000;

io.on('connection', (socket) => {

  //listen to connections from client
  socket.on('message', (msg) => {

    //send message to all sockets connected
    io.emit('message', msg);

  });
});

app.get('/', (req, res)=>{
  res.send("SocketIO server connected.");
});

app.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});