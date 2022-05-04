import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
const config = require('../config.json');
const apiUrl = config.EXTERNAL_API_URL;
const apiKey = config.API_KEY;


const weatherUrl = `${apiUrl}/services/timeline/kansas%20city?unitGroup=us&include=current&key=${apiKey}`

export default function Current () {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        const response = await fetch(weatherUrl);
        const jsonData = await response.json();
        setWeatherData(jsonData)
    };

    console.log(weatherData.currentConditions);

    return (
        <div className="current">
            {weatherData && weatherData.currentConditions ? weatherData.currentConditions.map(weather => {
            return <Row xs={1} md={1} className="g-4" >
                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Header>{weather.temp}</Card.Header>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>               
            </Row> 
            }):null
            }        
        </div>   
    )
}