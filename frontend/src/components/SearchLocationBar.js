import axios from 'axios';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Search from './Search';
import React, { useState, useEffect } from "react";

export default function SearchLocationBar() {
  let [search, setSeatrch] = useState('')
  let [weatherData, setWeatherData] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    if(search) {
      getWeatherForecast();
    }
  }, [search]);

  const handleSearch = (e, location) => {
    e.preventDefault()
    setSeatrch(location)
    navigate('/search')
  }

  const getWeatherForecast = () => {
    const options = {
        method: 'GET',
        url: '/api/external/forecast',
        params: {latLong: `${search}`},
    }
  
    axios.request(options).then((response) => {
        setWeatherData(response.data)

        console.log(response.data)
    }).catch((error) => {
        console.error(error)
    })
  }

  return(
      <div className="SearchLocationBar">
        <Form onSubmit={handleSearch} className="d-flex">
            <FormControl
                type="search"
                placeholder="Search Here"
                className="me-2"
                aria-label="Search"
                onClick={(e) => handleSearch(e, e.target.value)}
            />
        <Button variant="outline-success">Search</Button>
        </Form>
        <Search weatherData={weatherData} />
      </div>
  )
}