const express = require('express')
import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = express()

const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.send('hello there')
// })
app.use(ssrHandler)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
