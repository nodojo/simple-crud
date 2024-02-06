const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Simple CRUD application that uses Node, Express, and Postgres.' })
})

app.listen(port, () => {
  console.log(`Application running on port ${port}.`)
})
