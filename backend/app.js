const express = require("express")

const app = express()

app.get("/", function (req, res) {
  res.send(process.env.PORT)
})

app.listen(process.env.PORT)
