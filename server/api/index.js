'use strict'

const router = require('express').Router()
const axios = require('axios')

router.post('/pointsofinterest', async (req, res, next) => {
  try {
    const city = JSON.stringify(req.body.place)
    const response = await axios.get(`https://api.foursquare.com/v2/venues/explore?near=${city}&query=attractions&client_id=AIJ3APO3HREV35QYKDE2SVC500GBUEY0D2R1X5L1EOA4FEHY&client_secret=SGSGU5LLITT05BWGZXHBXS2EJYJF44LI5WAMQR5T44ZV3V5B&v=20190505`)
    const results = response.data.response.groups[0].items.map(result => {
      return {
        name: result.venue.name
      }
    })
    console.log('results', results)
    res.json(results)
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