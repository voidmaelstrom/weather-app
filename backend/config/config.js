require('dotenv').config()

module.exports = {
  "development": {
    "WEATHER_APP_API_URL": process.env.WEATHER_APP_API_URL,
    "EXTERNAL_API_URL": process.env.EXTERNAL_API_URL,
    "REACT_APP_WEATHER_APP_API_URL": process.env.REACT_APP_WEATHER_APP_API_URL,
    "MONGODB_URL": process.env.MONGODB_URL,
    "API_KEY": process.env.API_KEY,
    "PORT": process.env.PORT
  },
  "production": {
    "WEATHER_APP_API_URL": process.env.WEATHER_APP_API_URL,
    "EXTERNAL_API_URL": process.env.EXTERNAL_API_URL,
    "REACT_APP_WEATHER_APP_API_URL": process.env.REACT_APP_WEATHER_APP_API_URL,
    "MONGODB_URL": process.env.MONGODB_URL,
    "API_KEY": process.env.API_KEY,
    "PORT": process.env.PORT
  }
}