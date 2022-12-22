import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/contact.css';
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';


export default class Contact extends React.Component {

    render () {
        return (
            <div fluid  className="imgContact">
                    <div className="intro">
                        <Container className="d-flex justify-content-center align-items-center content">
                            <Row>
                                <Col className="colIcon">
                                    <div className="icon">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook size={96} color="black" /></a>
                                    </div> 
                                    <div>
                                        <h2>Facebook</h2>
                                    </div>
                                </Col>
                                <Col className="colIcon">
                                    <div className="icon">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram size={96} color="black" /></a>
                                    </div> 
                                    <div>
                                        <h2>Instagram</h2>
                                    </div>
                                </Col>
                                <Col className="colIcon">
                                    <div className="icon">
                                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><BsGithub size={96} color="black" /></a>
                                    </div> 
                                    <div>
                                        <h2>Github</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
        )
    }
}