import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function Current() {
    const [weatherData, setWeatherData] = useState({});

    const currentKeys = ['conditions','temp', 'feelslike', 'windspeed', 'humidity', 'sunrise', 'sunset']

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentWeather = () => {
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_WEATHER_APP_API_URL}/api/external/current`,
            params: { location: `${localStorage.getItem("lat")},${localStorage.getItem("long")}` },
        }

        axios.request(options).then((response) => {
            setWeatherData(response.data.currentConditions)

        }).catch((error) => {
            console.error(error)
        })
    }
    const getDisplay = () => {
        const results = []
        if (weatherData) {
            Object.keys(weatherData).map((key) => {
                if (currentKeys.includes(key)) {
                    results.push(
                        <Row xs={1} md={1} className="d-flex p-2" >
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Header>{key}</Card.Header>
                                        <Card.Text style={{ fontSize: "23px" }}>
                                            <p>{weatherData[key]}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                }
                return null
            })
            return results
        }
        return null;
    }
    
return (
    <div className="current">
        {getDisplay()}
    </div>
)
}