import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import  Container  from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home.js';
import Current from './Current.js';
import Alerts from './Alerts.js';
import History from './History.js';
import Radar from './Radar.js';
import ThreeDay from './3Day.js';
import FiveDay from './5Day.js';
import SevenDay from './7Day.js';

const NavBar = () => {
    return (
        <Router>
            <Navbar bg="light" variant="light" fixed="top" >
            <Container>
            <Nav className="me-auto">
                <Nav.Link href="/">
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="/current">
                    <Link to="/current">Current</Link>
                </Nav.Link>
                <Nav.Link href="/alerts">
                    <Link to="/alerts">Alerts</Link>
                </Nav.Link>
                <Nav.Link href="/history">
                    <Link to="/history">History</Link>
                </Nav.Link>
                <Nav.Link href="/radar">
                    <Link to="/radar">Radar</Link>
                </Nav.Link>
                <NavDropdown title="Forecast" id="forecastDropdown">
                    <NavDropdown.Item>
                        <Nav.Link href="/3day">
                            <Link to="/3day">3 Day</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Nav.Link href="/5day">
                            <Link to="/5day">5 Day</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Nav.Link href="/7day">
                            <Link to="/7day">7 Day</Link>
                        </Nav.Link>
                    </NavDropdown.Item>
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
            <div className="Display">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/current" element={<Current />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/radar" element={<Radar />} />
                    <Route path="/3day" element={<ThreeDay />} />
                    <Route path="/5day" element={<FiveDay />} />
                    <Route path="/7day" element={<SevenDay />} />
                </Routes>
            </div>
        </Router>
    )
}

export default NavBar