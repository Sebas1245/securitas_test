import React , { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/img/logo_final.png'

class NavBar extends Component {
    render(){
        return(
            <Navbar sticky="top" bg="light" variant="light">
                <Navbar.Brand className="align-middle">
                    <img src={ Logo }
                     width="104"
                     height="45"
                     className="d-inline-block align-top"
                     alt="Securitas México Logo"/>{' '}
                     <span className="ml-3 align-middle">Securitas México</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>Inicio</Nav.Link>
                    <Nav.Link>Catálogo</Nav.Link>
                    <Nav.Link>Sobre nosotros</Nav.Link>
                    <Nav.Link>Contacto</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar