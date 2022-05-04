
const mongoose = require("mongoose");
const axios = require('axios');
const express = require('express');
const router = express.Router();

const apiUrl = process.env.WEATHER_APP_API_URL;
const extApiUrl = process.env.EXTERNAL_API_URL;
const apiKey = process.env.API_KEY;

const getHomeLocation = async () => {
  try {
    const response = await axios.get(`${apiUrl}/location/name/home`);
    const dataReturn = await response;
    const coords = `${dataReturn.data[0].latitude},${dataReturn.data[0].longitude}`
    console.log(coords)
    return coords
  } catch(error) {
    if (error.response) { // get response with a status code not in range 2xx
      console.log('ERRORS ARE PRESENT')
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      // console.log(error.request);
    } else { // Something wrong in setting up the request
      // console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

router.get('/forecast', (req,res) => {
  let timeRange = null
  req.query.timeRange ? timeRange = req.query.timeRange : timeRange = null
  const latLong = req.query.latLong

  const options = {
      method: 'GET',
      url: `${extApiUrl}/services/timeline/${latLong}/${timeRange}?key=${apiKey}`
  }

  axios.request(options).then((response) => {
      res.json(response.data)

  }).catch((error) => {
      console.error(error)
  })
})

async function getMyLocationWeather() {
  try {
    const response = await axios(`${extApiUrl}/services/timeline/${coords}?key=${apiKey}`);
    console.log(response)
    return response.data;
  } catch(error) {
    if (error.response) { // get response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log(error.request);
    } else { // Something wrong in setting up the request
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

// GET /forecast
router.get('/', async (req,res) => {
  const getForecast = await getMyLocationWeather();
  try {
      return res.status(200).json(getForecast);
  } catch (error) {
      console.log(error)
      return res.status(500).json({message: "Couldn't retrieve the forecast"})
  }
});

module.exports = router;