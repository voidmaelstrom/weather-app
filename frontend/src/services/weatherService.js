import axios from "axios";
const apiUrl = process.env.EXTERNAL_API_URL;
const apiKey = process.env.API_KEY;

async function getCoords(){
  pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
  })
  return `${pos.coords.latitude},${pos.coords.longitude}`
}

export const getMyLocationWeather = async () => {
  try {
    const response = await axios.get(`${apiUrl}/services/timeline/${getCoords}?key=${apiKey}`);
    return response;
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

export const getForecast = async () => {

}
