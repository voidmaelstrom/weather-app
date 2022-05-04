import axios from "axios";
const config = require('../config.json');

export function getLocation() {
  return new Promise((resolve,reject) => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              console.log('executed')
              // return resolve(`${position.coords.latitude},${position.coords.longitude}`);
              return resolve(position);
          }, function(err) {
              return reject(err);
          });

      } else {
          return reject("Geolocation is not supported by this browser.");
      }
  })
}

(async function() {
  const coords = await getLocation();
  localStorage.setItem("lat", coords.coords.latitude)
  localStorage.setItem("long", coords.coords.longitude)
  console.log(coords);
  axios.get('/api/location/name/home', {
  }) ?
  console.log('home location already set')
 :
  axios.post('/api/location', {
    latitude: coords.coords.latitude,
    longitude: coords.coords.longitude,
    type: "Point",
    coordinates: [
      coords.coords.latitude,
      coords.coords.longitude
    ],
    name: "home"
  })
})().then(() => {
  console.log("done")
}).catch((err) => {
  console.error(err);
})

export const getWeatherForecast = () => {
  const options = {
      method: 'GET',
      url: '/api/external/forecast',
      params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`},
  }

  axios.request(options).then((response) => {
      console.log(response.data)

  }).catch((error) => {
      console.error(error)
  })
}

export const getLocations = async () => {
  try {
    const response = await axios.get(`/api/location`);
    return console.log(response);
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
