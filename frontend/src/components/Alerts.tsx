import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";

export default function Alerts (props: any) {

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const getCurrentWeather = () => {
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_WEATHER_APP_API_URL}/api/external/forecast`,
            params: {latLong: `${localStorage.getItem("lat")},${localStorage.getItem("long")}`},
        }
      
        axios.request(options).then((response) => {
            setWeatherData(response.data.alerts)
      
        }).catch((error) => {
            console.error(error)
        })
    }
    
    return(
        props.weatherData.length > 0 ?
        <div className="alerts">
            {props.weatherData.map((alerts: { headline: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; description: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; id: React.Key | null | undefined; link: string | undefined; }) => {
                return <Row xs={1} md={1} className="g-4" >
                    <Col>
                        <Card style={{ width: "100vw" }} className="cards">
                            <Card.Body>
                                <Card.Header>{alerts.headline}</Card.Header>
                                <Card.Text>
                                    <p>{alerts.description}</p>
                                    <p><a key={alerts.id} href={alerts.link}>Click here for more information.</a></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>   
            })
            }
        </div> :
        <div className="noAlerts">No alerts for your area.</div>
    )
}