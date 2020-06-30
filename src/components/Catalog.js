import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { AnimationWrapper } from 'react-hover-animation';
// image imports
import Kursa1 from '../assets/img/catalog/kursa1.jpg';
import Kursa2 from '../assets/img/catalog/kursa2.jpg';
import HandheldMobilix1 from '../assets/img/catalog/handheldMobilix1.jpg';
import HandheldMobilix2 from '../assets/img/catalog/handheldMobilix2.jpg';
import TabletUR1 from '../assets/img/catalog/tabletUR1.jpg';
import TabletUR2 from '../assets/img/catalog/tabletUR2.jpg';
import TabletW1 from '../assets/img/catalog/tabletW1.jpg';
import TabletW2 from '../assets/img/catalog/tabletW2.jpg';
import Scooter1 from '../assets/img/catalog/scooter1.jpg';
import Scooter2 from '../assets/img/catalog/scooter2.jpg';
import Apiax1 from '../assets/img/catalog/apiax1.jpg';
import Apiax2 from '../assets/img/catalog/apiax2.jpg';
import Lanix1 from '../assets/img/catalog/lanix1.jpg';
import Lanix2 from '../assets/img/catalog/lanix2.jpg';
import Candado1 from '../assets/img/catalog/candado1.jpg';
import Candado2 from '../assets/img/catalog/candado2.jpg';


function Catalog(){
    const items = [
        {id: 1,title: 'Kursa Plataforma de Autocapacitación', price: '$1,990.00', img1: Kursa1, img2: Kursa2, href: '' },
        {id: 2,title: 'HandHeld Mobilix con Android 7.0', price: '$14,000.00', img1: HandheldMobilix1 , img2: HandheldMobilix2, href: ''},
        {id: 3,title: 'Tablet de Uso Rudo 8 Pulgadas IP67', price: '$17,000.00', img1: TabletUR1 , img2: TabletUR2, href: ''},
        {id: 4,title: 'Tablet Windows 10.1 HD', price: '$11,000.00', img1: TabletW1, img2: TabletW2, href: ''},
        {id: 5,title: 'Scooter eléctrico autoequilibrado E8', price: '$29,990.00', img1: Scooter1, img2: Scooter2, href: ''},
        {id: 6,title: 'Extensión SIP para Conmutador en la Nube APIAX', price: '$250.00', img1: Apiax1 , img2: Apiax2, href: ''},
        {id: 7,title: 'Tablet Lanix 10\'\' Ilium Pad E10', price: '$2,250.00', img1: Lanix1 , img2: Lanix2, href: ''},
        {id: 8,title: 'Candado Electrónico JT705 con GPS para Cajas Secas y Contenedores', price: '$13,500.00', img1: Candado1 , img2: Candado2, href: ''},
    ]
    const itemList = items.map( item => {
        return (
            <Col xs={12} md={6} lg={3} key={item.id}>
                <Card>
                    <AnimationWrapper>
                        <Card.Img top="true" 
                        src={item.img1} 
                        onMouseOver={(e) => {
                            e.currentTarget.src = item.img2;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.src = item.img1;
                        }}> 
                        </Card.Img>
                    </AnimationWrapper>
                    <Card.Body className="text-light font-weight-light">
                        <Card.Subtitle>{item.title}</Card.Subtitle>
                        <Card.Text>{item.price}</Card.Text>
                        <Card.Link className="text-light"  alt={item.title} href={item.href}>Ver Detalle</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <Container id="catalog" fluid>
            <h1 className="pt-3 mb-3 ml-3 text-hydrogen">Catálogo</h1>
            <Row>
                {itemList}
            </Row>  
        </Container>
    )
}

export default Catalog