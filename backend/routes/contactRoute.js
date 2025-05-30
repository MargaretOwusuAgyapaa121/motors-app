const express = require("express")
const { sendMessage } = require("../controller/mailController")
const app = express.Router()

app.post('/send-message', sendMessage)

module.exports = app
