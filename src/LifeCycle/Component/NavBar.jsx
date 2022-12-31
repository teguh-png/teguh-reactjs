import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from "react-bootstrap";

export default class NavBar extends React.Component {
    render () {
        return (
          <Navbar style={{height: '80px'}} bg="success" variant="dark">
            <Container>
              <Navbar.Brand href="#home">REACT CLASS NEWS</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}