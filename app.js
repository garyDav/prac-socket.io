import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express(),
      publicDir = express.static( path.join(__dirname, 'public') )

// Routing
app
  .use(publicDir)
  .get('/', (req, res) => {
    res.sendfile( path.join(publicDir, 'index.html') )
  })

//if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
//}

export default app
