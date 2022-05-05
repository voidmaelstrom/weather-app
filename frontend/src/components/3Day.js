import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
const config = require('../config.json');
const apiUrl = config.EXTERNAL_API_URL;
const apiKey = config.API_KEY;

const weatherUrl = `${apiUrl}/services/timeline/KansasCity,MO/next2days?key=${apiKey}`

export default function ThreeDay() {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        const response = await fetch(weatherUrl);
        const jsonData = await response.json();
        setWeatherData(jsonData)
    };

    return (
        <div className="threeDay">
            {weatherData && weatherData.days ? weatherData.days.map(weather => {
                return <Row xs={1} md={1} className="g-4" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card>
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
