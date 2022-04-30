import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Search () {
    return(
        <div className="search">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Search Results
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}