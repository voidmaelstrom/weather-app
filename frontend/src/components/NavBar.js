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
import Search from './Search.js';
import SearchLocation from './SearchLocation.js';
import { getLocation } from '../services/weatherService';

const NavBar = () => {
    return (
        <Router>
            <Navbar bg="light" variant="light" fixed="top" >
            <Container>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/current">Current</Nav.Link>
                <Nav.Link as={Link} to="/alerts">Alerts</Nav.Link>
                <Nav.Link as={Link} to="/history">History</Nav.Link>
                <Nav.Link as={Link} to="/radar">Radar</Nav.Link>
                <NavDropdown title="Forecast" id="forecastDropdown">
                    <NavDropdown.Item as={Link} to="/3day">3 Day</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/5day">5 Day</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/7day">7 Day</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <SearchLocation />
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
                    <Route path="/search" element={<SevenDay />} />
                </Routes>
            </div>
        </Router>
    )
}

export default NavBar