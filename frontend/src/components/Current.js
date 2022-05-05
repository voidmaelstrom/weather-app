import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

// const weatherUrl = `${apiUrl}/services/timeline/kansas%20city?unitGroup=us&include=current&key=${apiKey}`

export default function Current () {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentWeather = () => {
        const options = {
            method: 'GET',
            url: '/api/external/current',
            params: {location: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data.currentConditions)
      
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="current">
            {weatherData ? Object.keys(weatherData).map((key) => {
                return <Row xs={1} md={1} className="g-4" >
                    <Col>
                        <Card style={{ width: "15rem" }} className="cards">
                            <Card.Body>
                            <Card.Header>{key}</Card.Header>
                                <Card.Text>
                                    <p>{weatherData[key]}</p>
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