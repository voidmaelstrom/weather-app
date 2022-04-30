# Weather App

## Intended App flow Diagram

<img src="./Weather_App.svg">

## Steps to start app for development

1.) cd into the `frontend` directory and run the following commands:

`npm i`

`npm start`

2.) Open a new terminal and cd into the `backend` directory and run the following commands:

`npm i`

`nodemon app.js`

3.) Open your browser to visit the frontend with this address:

http://localhost:3000

You should see a page load with a navbar with options on top with this text on the page:

`Weather App`

4.) Open a new tab in your browser to visit the backend API:

http://localhost:5000

You should see this return in json:

```
{
"message": "API Success!"
}
```