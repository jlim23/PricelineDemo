'use strict'

const router = require('express').Router()
const axios = require('axios')

router.post('/pointsofinterest', async (req, res, next) => {
  try {
    const {data} = await axios.get(`https://api.foursquare.com/v2/venues/explore?near=${req.body.place}&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20190505`)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router