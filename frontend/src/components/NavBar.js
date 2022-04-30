import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import  Container  from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown'


const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" fixed="top" >
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#current">Current</Nav.Link>
            <Nav.Link href="#alerts">Alerts</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
            <Nav.Link href="#radar">Radar</Nav.Link>
            <NavDropdown title="Forecast" id="forecastDropdown">
                <NavDropdown.Item href="#3day">3 Day</NavDropdown.Item>
                <NavDropdown.Item href="#5day">5 Day</NavDropdown.Item>
                <NavDropdown.Item href="#7day">7 Day</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
        <Button variant="outline-success">Search</Button>
        </Form>
        </Container>
    </Navbar>
    )
}

export default NavBar