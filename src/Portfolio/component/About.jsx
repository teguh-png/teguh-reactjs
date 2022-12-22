import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/about.css'
import { Col, Container, Row } from "react-bootstrap";

export default class About extends React.Component {
    
    render () {
            return (
                <div fluid  className="imgAbout">
                    <div className="intro">
                        <Container className="d-flex justify-content-center align-items-center content">
                            <Row>
                                <Col>
                                    <div className="title" style={ { fontStyle : 'Italic', fontSize: '30px' }}>Hi! I AM</div> 
                                    <div className="title">TEGUH FIRMANSYAH</div>
                                    <div className="title">WEB DEVELOPER</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                
                )
    }
}
