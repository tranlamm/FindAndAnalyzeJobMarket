import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import routes from '~/configs/routes';

function Header() {
    return (
        <Navbar
            bg="dark"
            expand="md"
            variant="dark"
            fixed="top"
            style={{ backgroundImage: 'linear-gradient(to bottom, #141e30, #243b55)', height: '60px' }}
        >
            <Container>
                <Navbar.Brand as={NavLink} to={routes.welcome}>
                    Job App Demo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" navbarScroll>
                        <Nav.Link as={NavLink} to={routes.home}>
                            Find Job
                        </Nav.Link>
                        <Nav.Link as={NavLink} to={routes.locationAnalysis}>
                            Analysis
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
