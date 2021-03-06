import axios from "axios";

export function getLocation() {
  return new Promise((resolve,reject) => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              console.log('executed')
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
  axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/name/home`)
       .then(response => {response.data.length === 0 ? 
        axios.post(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location`, {
          latitude: coords.coords.latitude,
          longitude: coords.coords.longitude,
          type: "Point",
          coordinates: [
            coords.coords.latitude,
            coords.coords.longitude
          ],
          name: "home"
        }): console.log('Home location already set')})
})().then(() => {
  console.log("done")
}).catch((err) => {
  console.error(err);
})

export const getWeatherForecast = () => {
  const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_WEATHER_APP_API_URL}/api/external/forecast`,
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
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location`);
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
