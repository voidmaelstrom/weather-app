import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import { getWeatherForecast } from '../services/weatherService';

export default function SevenDay () {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeatherForecast();
    }, []);

    const getWeatherForecast = () => {
        const options = {
            method: 'GET',
            url: '/api/external/forecast',
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`,
                     timeRange: 'next7days'},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data)
      
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="sevenDay">
            {weatherData && weatherData.days ? weatherData.days.map(weather => {
                return <Row xs={1} md={1} className="g-4" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: "15rem" }} className="cards">
                        <Card.Body>
                            <Card.Header>{weather.datetime}</Card.Header>
                            <Card.Text>
                                <p>{weather.description}</p>
                                <p>Chance of precipitation {weather.precipprob}% </p>
                                <p>High of {weather.tempmax} <br></br> Low of {weather.tempmin}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            }):null
            }
        </div>
    )
}