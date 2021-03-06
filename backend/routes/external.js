
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

function awaitHome() {
  let home = getHomeLocation()
  return home
}

router.get('/forecast', (req,res) => {
  try {

    let latLong = req.query.latLong
    let timeRange = null


    // TODO Still debugging here; leaving in for now to reference
    // if (!latLong) {
    //   // awaitHome().then(response => {return latLong = response});
    //   getHomeLocation().then(response => {console.log(response)})
    // }

    req.query.timeRange ? timeRange = req.query.timeRange : timeRange = ''
  
    const options = {
        method: 'GET',
        url: `${extApiUrl}/services/timeline/${latLong}/${timeRange}?key=${apiKey}`
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch(function (error) {
      console.log(error.toJSON());
    });

  } catch(error) {
      console.warn(error)
    if (error.response) { // get response with a status code not in range 2xx
      console.log('ERRORS ARE PRESENT')
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
})

router.get('/history', (req,res) => {
  try {

    let latLong = req.query.latLong
  
    const options = {
        method: 'GET',
        url: `${extApiUrl}/services/timeline/${latLong}/last4days?key=${apiKey}`
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch(function (error) {
      console.log(error.toJSON());
    });

  } catch(error) {
      console.warn(error)
    if (error.response) { // get response with a status code not in range 2xx
      console.log('ERRORS ARE PRESENT')
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
})

router.get('/current', (req,res) => {
  try {
    let location = null
    
    req.query.location ? location = req.query.location : location = ''

    const options = {
        method: 'GET',
        url: `${extApiUrl}/services/timeline/${location}?include=current&key=${apiKey}`
    }

    axios.request(options).then((response) => {
        // console.log(response.data.currentConditions)
        res.json(response.data)

    }).catch(function (error) {
      console.log(error.toJSON());
    });

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