import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function FiveDay () {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeatherForecast();
    }, []);

    const getWeatherForecast = () => {
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_WEATHER_APP_API_URL}/api/external/forecast`,
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`,
                     timeRange: 'next4days'},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data)
      
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="fiveDay">
            {weatherData && weatherData.days ? weatherData.days.map(weather => {
                return <Row key={weather.datetimeEpoch} xs={1} md={1} className="d-flex p-2" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: "15rem", height: "22rem" }} className="cards">
                        <Card.Body>
                            <Card.Header style={{ fontSize: "23px" }}>{weather.datetime}</Card.Header>
                            <Card.Text>
                            <div>{weather.description}</div>
                                <hr></hr>
                                <div>Chance of precipitation</div>
                                <div> {weather.precipprob}% </div>
                                <hr></hr>
                                <div>High of {weather.tempmax}°F</div>
                                <div>Low of {weather.tempmin}°F</div>
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