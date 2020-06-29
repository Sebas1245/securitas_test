import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// logo imports
import { FaPhone , FaFacebook } from 'react-icons/fa';

function Contact(){
    return (
    <Container>
        <Row className="justify-content-end">
            <h1 className="text-hydrogen">Contáctanos</h1>
        </Row>
        <Row className="justify-content-end">
            <p className="text-dark lead">¿Necesitas nuestro apoyo? Estamos aquí para servirte.</p>
        </Row>
        <Row>
            <Col xs={12} md={6} className="font-weight-light">
                <Row className="justify-content-center">
                    <p>Calle Ecuador 518</p>
                </Row>
                <Row className="justify-content-center">
                    <p>Monterrey,Nuevo León, México</p>
                </Row>
                <Row className="justify-content-center">
                    <p> <FaPhone /> +52 81 8682 7833</p>
                </Row>
                <Row className="justify-content-center">
                    <a href="https://www.facebook.com/prosecuritas/" className="text-hydrogen"><FaFacebook size={25}/></a>
                </Row>
            </Col>
            <Col xs={12} md={6}>
            </Col>
        </Row>
    </Container>
    )
}

export default Contact