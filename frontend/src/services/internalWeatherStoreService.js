import axios from "axios";
import env from "react-dotenv";

export const getHomeLocation = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/name/home`);
    console.log(`${response.data[0].latitude},${response.data[0].longitude}`);
    return String(`${response.data[0].latitude},${response.data[0].longitude}`)
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

export const getAllLocations = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location`);
    console.log(response);
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

export const getLocationById = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/${id}`);
    console.log(response)
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

export const getLocationByName = async (name) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/name/${name}`);
    console.log(response)
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

export const putLocationById = async (id) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/${id}`);
    console.log(response)
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

export const postLocation = async (locationBody) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location`, locationBody);
    console.log(response)
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

export const delLocation = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_WEATHER_APP_API_URL}/api/location/${id}`);
    console.log(response)
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

