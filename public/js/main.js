(function (io, $) {
  // Prompt for setting a username
  let username;
  let connected = false;

  let socket = io.connect('http://localhost:3000/')

  // Sets the client's username
  const setUsername = () => {
    username = 'Soy un Usuario'

    // If the username is valid
    if (username) {
      // Tell the server your username
      socket.emit('add user', username)
    }
  }

  setUsername()

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', (data) => {
    connected = true
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – "
    console.log(message, {
      prepend: true
    })
    console.log(data)
  })

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', (data) => {
    console.log(data.username + ' joined')
    console.log(data)
  })

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', (data) => {
    console.log(data.username + ' left')
    console.log(data)
  })

  socket.on('disconnect', () => {
    console.log('you have been disconnected')
  })

  socket.on('reconnect', () => {
    console.log('you have been reconnected')
    if (username) {
      socket.emit('add user', username)
    }
  })

  socket.on('reconnect_error', () => {
    log('attempt to reconnect has failed')
  })

})(io, jQuery)
