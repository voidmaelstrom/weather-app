import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function History () {
    return(
        <div className="history">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                           History
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}