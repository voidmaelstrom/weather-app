
const axios = require('axios');
const express = require('express');
const router = express.Router();

const apiUrl = process.env.EXTERNAL_API_URL;
const apiKey = process.env.API_KEY;

coords = "40.0849873,-104.9474904"

async function getMyLocationWeather() {
  try {
    const response = await axios(`${apiUrl}/services/timeline/${coords}?key=${apiKey}`);
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