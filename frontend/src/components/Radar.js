import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Radar () {
    return(
        <div className="radar">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Radar
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}