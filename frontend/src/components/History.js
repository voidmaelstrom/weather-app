import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function History () {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getWeatherHistory();
    }, []);

    const getWeatherHistory = () => {
        const options = {
            method: 'GET',
            url: '/api/external/history',
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`,
            timeRange: 'last4days'},        
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className="history">
            {weatherData && weatherData.days ? weatherData.days.map(weather => {
                return <Row key={weather.datetimeEpoch} xs={1} md={1} className="d-flex p-2" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: "15rem", height: "22rem" }} className="cards">
                        <Card.Body>
                            <Card.Header style={{ fontSize: "23px" }}>{weather.datetime}</Card.Header>
                            <Card.Text>
                            <div>{weather.conditions}</div>
                                <hr></hr>
                                <div>High of {weather.tempmax}°F</div>
                                <div>Low of {weather.tempmin}°F</div>
                                <hr></hr>
                                <div>Precipitation {weather.precip}"</div>
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