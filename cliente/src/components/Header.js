import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <Link to="/" className="navbar-brand" >CRM</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Precio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Acerca de Nosotros</a>
                </li>
            </ul>
            <Link to="/cliente/nuevo" className="btn btn-secondary my-2 my-sm-0">
                Nuevo Cliente
            </Link>
        </div>
    </nav>
);
export default Header;