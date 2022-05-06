import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function ThreeDay() {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeatherForecast();
    }, []);

    const getWeatherForecast = () => {
        const options = {
            method: 'GET',
            url: '/api/external/forecast',
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`,
                     timeRange: 'next2days'},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="threeDay">
            {weatherData && weatherData.days ? weatherData.days.map(weather => {
                return <Row key={weather.datetimeEpoch} xs={1} md={1} className="g-4" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: "15rem" }} className="cards">
                        <Card.Body>
                            <Card.Header>{weather.datetime}</Card.Header>
                            <Card.Text>
                                <div>{weather.description}</div> 
                                <div>Chance of precipitation {weather.precipprob}% </div>
                                <div>High of {weather.tempmax} <br></br> Low of {weather.tempmin}</div>
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
