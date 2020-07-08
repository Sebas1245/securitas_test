import React , { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/img/logo_final.png';
import { Link, animateScroll as scroll } from "react-scroll";


class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }
    render(){
        return(
            <Navbar sticky="top" expand="md" bg="light" variant="light">
                <Navbar.Brand className="align-middle" style={{ cursor: 'pointer'}} onClick={this.scrollToTop}>
                    <img src={ Logo }
                     width="104"
                     height="45"
                     className="d-inline-block align-top"
                     alt="Securitas México Logo"/>{' '}
                     <span className="ml-3 align-middle">Securitas México</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link
                    activeClass="active"
                    to="catalog"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={600} 
                    href="#"
                    className="nav-link"
                    role="button">
                        Catálogo
                    </Link>
                    <Link
                    to="about"
                    smooth={true}
                    spy={true}
                    offset={-90}
                    duration={600} 
                    href="#"
                    className="nav-link"
                    role="button">
                        Sobre nosotros
                    </Link>
                    <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={600} 
                    href="#"
                    className="nav-link"
                    role="button">
                        Contacto
                    </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar