import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Search (props) {
    return(
        <div className="search">
            {props.weatherData && props.weatherData.days ? props.weatherData.days.map(weather => {
                return <Row key={weather.datetimeEpoch} xs={1} md={1} className="g-4" >
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: "15rem", height: "25rem" }} className="cards">
                        <Card.Body>
                            <Card.Header style={{ fontSize: "23px" }}>{weather.datetime}</Card.Header>
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