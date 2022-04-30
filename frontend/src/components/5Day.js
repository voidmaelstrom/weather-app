import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function FiveDay () {
    return(
        <div className="fiveDay">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            5 Day Forecast
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}