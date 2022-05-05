import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function Alerts () {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentWeather = () => {
        const options = {
            method: 'GET',
            url: '/api/external/forecast',
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data.alerts)
            console.log(response.data)
      
        }).catch((error) => {
            console.error(error)
        })
    }
    
    return(
        weatherData.length === 0 ?
        <div className="alerts">
            {weatherData && weatherData.alerts ? weatherData.alerts.map(alerts => {
                return <Row xs={1} md={1} className="g-4" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: "15rem" }} className="cards">
                            <Card.Body>
                                <Card.Header>{alerts}</Card.Header>
                                <Card.Text>
                                    <p>{alerts}</p> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>   
            }): null
            }
        </div>:
        <div className="noAlerts">
            <p>No Alerts for your area!</p>
        </div>
    )
}