import app from './app'
import http from 'http'
import socket from 'socket.io'
import control from './socket'


const PORT = process.env.PORT || 3000,
      server = http.createServer(app),
      io = socket(server)

function start() {
  server.listen(PORT, () => {
    console.log('Iniciando Express y Socket.IO en localhost:%d', PORT)
  })
}

start()
control(io)
