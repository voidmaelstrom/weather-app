
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Current from './Current';
import FiveDay from './5Day';

export default function Home () {
    return(
        <div className="home">
            <Container>
                <Card border="info" >
                    <Card.Body>
                        <Card.Text style={{ fontSize: "2.5em" }}>
                            Weather App Home
                        </Card.Text>
                    </Card.Body>
                </Card>
                <body>
                    <Current />
                    <FiveDay />
                </body>
            </Container> 
        </div>
        
    )
}