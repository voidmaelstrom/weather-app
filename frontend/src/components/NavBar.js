import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import Container  from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home.js';
import Current from './Current.js';
import Alerts from './Alerts.js';
import History from './History.js';
import ThreeDay from './3Day.js';
import FiveDay from './5Day.js';
import SevenDay from './7Day.js';
import Search from './Search.js';
import { getLocation } from '../services/weatherService';

// Get home location set
getLocation();

const NavBar = () => {

    let [search, setSeatrch] = useState('')
    let [weatherData, setWeatherData] = useState({})
  
    const navigate = useNavigate();
  
    useEffect(() => {
      if(search) {
        getWeatherForecast();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
  
    const handleSearch = (e, location) => {
      e.preventDefault()
      setSeatrch(location)
      navigate('/search')
    }
  
    const getWeatherForecast = () => {
      const options = {
          method: 'GET',
          url: `${process.env.REACT_APP_WEATHER_APP_API_URL}/api/external/forecast`,
          params: {latLong: `${search}`},
      }
    
      axios.request(options).then((response) => {
          setWeatherData(response.data)
  
          console.log(response.data)
      }).catch((error) => {
          console.error(error)
      })
    }

    return (
            <><>
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/current">Current</Nav.Link>
                        <Nav.Link as={Link} to="/alerts">Alerts</Nav.Link>
                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                        <NavDropdown title="Forecast" id="forecastDropdown">
                            <NavDropdown.Item as={Link} to="/3day">3 Day</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/5day">5 Day</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/7day">7 Day</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form onSubmit={handleSearch} className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search Here"
                            className="me-2"
                            aria-label="Search"
                            onClick={(e) => handleSearch(e, e.target.value)} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </><div className="Display">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/current" element={<Current />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/3day" element={<ThreeDay />} />
                    <Route path="/5day" element={<FiveDay />} />
                    <Route path="/7day" element={<SevenDay />} />
                    <Route path="/search" element={<Search weatherData={weatherData} />} />
                </Routes>
            </div></>
    )
}

export default NavBar