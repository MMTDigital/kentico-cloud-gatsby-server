const express = require('express')
const router = express.Router()

router.use('/webhook', (request, response) => {
  response.sendStatus(200)
})

module.exports = router
