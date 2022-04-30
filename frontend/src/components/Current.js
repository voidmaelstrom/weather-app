import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Current () {
    return(
        <div className="current">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Current Weather
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}