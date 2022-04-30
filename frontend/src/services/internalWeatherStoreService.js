import axios from "axios";
const apiUrl = process.env.WEATHER_APP_API_URL;

export const getAllLocations = async () => {
  try {
    const response = await axios.get(`${apiUrl}/location`);
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

export const getLocationById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/location/${id}`);
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
    const response = await axios.put(`${apiUrl}/location/${id}`);
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
    const response = await axios.post(`${apiUrl}/location`, locationBody);
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

export const delLocation = async = (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/location/${id}`);
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

