const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola mundo desde heroku!')
})

/* Le decimos a nodejs el puerto que se asignara */
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})