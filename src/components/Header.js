import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-scroll'


function Header() {
    
    return(
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                    <h1 className="display-2 text-light font-weight-dark">Artículos y servicios únicos en su clase</h1>
                    <p className="text-light lead">Tablets y handhelds de uso rudo, soluciones de Voz sobre IP, consultoría y mucho más</p>
                    <Link
                    activeClass="active"
                    to="catalog"
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={600} 
                    href="#"
                    className="btn btn-outline-light">
                        Ver Catálogo
                    </Link>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header