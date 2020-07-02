import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

class CatalogModal extends Component {
    state={
        show: false,
        characterstics: this.props.item.characteristic.split('\n'),
        clicked: false,
        
    };
    iterator = 0;
    displayCharacteristics = this.state.characterstics.map(characteristic =>{
        this.iterator++;
        return (
          <ListGroup.Item key={this.iterator} style={{fontSize: '16px'}}>{characteristic}</ListGroup.Item>  
        )
    });
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }
    renderIcon = () => {
        if(this.state.clicked) {
            return (<FaCaretUp style={{ color: 'white' }}/>);
        }
        else {
            return(<FaCaretDown style={{ color: 'white' }}/>);
        }
    }
    handleShow = () => {
        this.setState({show: true})
    };
    handleClose = () => {
        this.setState({show: false})
    };
    render() {
        return(
            <div>
                <Card.Link className="text-light"  
                alt={this.props.title} 
                style={{ cursor: 'pointer' }} 
                onClick={this.handleShow} >
                    Ver Detalle
                </Card.Link>
                <Modal 
                show={this.state.show} 
                onHide={this.handleClose} 
                animation={true} 
                centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="ml-3">{this.props.item.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row className="mb-2">
                                <Col xs={12} lg={6}>
                                    <Image src={this.props.item.img1} fluid />
                                </Col>
                                <Col xs={12} lg={6} className="font-weight-light text-justify">
                                    <p>{this.props.item.description}</p>
                                    <p><span className="font-weight-bolder">Precio unitario:</span> {this.props.item.price}</p>
                                </Col>
                            </Row>
                            <Accordion>
                                    <Accordion.Toggle id="modalToggler" as={Card.Header}eventKey="1" style={{cursor: 'pointer'}}  onClick={this.handleClick}>
                                        <span className="mr-2 pt-1" style={{color: 'white'}}>Características</span>
                                        {this.renderIcon()}
                                    </Accordion.Toggle>
                                <Row>
                                    <Col>
                                        <Accordion.Collapse eventKey="1">
                                            <ListGroup variant="flush" className="text-weight-light">
                                                {this.displayCharacteristics}
                                            </ListGroup>
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" className="text-light" onClick={this.handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default CatalogModal