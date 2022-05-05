import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

// const weatherUrl = `${apiUrl}/services/timeline/kansas%20city?unitGroup=us&include=current&key=${apiKey}`

export default function Current () {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeatherForecast();
    }, []);

    const getWeatherForecast = () => {
        const options = {
            method: 'GET',
            url: '/api/external/forecast',
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`,
                     timeRange: ''},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data)
      
        }).catch((error) => {
            console.error(error)
        })
    }

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