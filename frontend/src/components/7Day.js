import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function SevenDay () {
    return(
        <div className="sevenDay">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            7 Day Forecast
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}