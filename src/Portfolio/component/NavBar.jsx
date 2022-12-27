import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavBar extends React.Component {

    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{height: '80px'}}>
                    <Container>
                        <Navbar.Brand href="About" style={ { fontSize: '30px', fontFamily: 'Playfair Display' }}>PROFILE</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="About" style={ { fontSize: '20px', marginRight:'50px' }}>About</Nav.Link>
                            <Nav.Link href="#Contact" style={ { fontSize: '20px' }}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}