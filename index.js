import app from './app'
import http from 'http'
import _io from 'socket.io'


const PORT = process.env.PORT || 3000,
      server = http.createServer(app),
      io = _io(server)
      

function start() {
  app.listen(PORT, () => {
    console.log('Iniciando Express y Socket.IO en localhost:%d', PORT)
  })
}

start()

// Chatroom

let numUsers = 0

io.on('connection', (socket) => {
  console.log(numUser)
});
