import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Alerts () {
    return(
        <div className="alerts">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Alerts!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}