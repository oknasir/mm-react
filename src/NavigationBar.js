import { Link } from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap"

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/view-form">View Form</Link>
                <Link className="nav-link" to="/about-us">About Us</Link>
                <Link className="nav-link" to="/application-form">Application Form</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavigationBar;