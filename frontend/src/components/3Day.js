import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function ThreeDay () {
    return(
        <div className="threeDay">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            3 Day Forecast
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}