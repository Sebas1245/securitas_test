import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import AboutThumbnail from '../assets/img/aboutThumbnail.jpg'

function About(){
    return(
        <div id="about" >
            <Container className="fluid mt-4 mb-5 text-hydrogen">
                <Row className="justify-content-center"> 
                    <h1>Quiénes somos</h1>
                </Row>
                <Row className="justify-content-center">
                    <h5><em>Un poco sobre nosotros</em></h5>
                </Row>
                <Row>
                    <p className="text-justify text-dark lead">En <strong className="text-hydrogen">Securitas México</strong> tenemos la visión de proveer productos y servicios <strong className="text-hydrogen">innovadores</strong> de la más alta calidad. Somos <strong className="text-hydrogen">consultores</strong> de productos y servicios que marcan tendencia,  de primer nivel y proveemos un <strong className="text-hydrogen">gran servicio al cliente</strong>. Somos un negocio compuesto por personas innovadoras que siempre miran a futuro. Tenemos el impulso y los medios para actualizar y mejorar constantemente la experiencia de tu compra en línea.</p>
                </Row>
                <Row className="justify-content-center">
                    <Image width="80%" src={AboutThumbnail} rounded fluid />
                </Row>
            </Container>
        </div>
    )
}

export default About