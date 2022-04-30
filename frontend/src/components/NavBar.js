import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import  Container  from 'react-bootstrap/Container';



const NavBar = () => {
    return (
      <>
        <Navbar bg="light" variant="light" fixed="top" >
            <Container>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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
      </>
    )
}

export default NavBar