import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Navbar.scss';



const CustomNavbar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home" className="dark-mode-text">Software Studio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="dark-mode-text">Home</Nav.Link>
                    <Nav.Link href="#about" className="dark-mode-text">About</Nav.Link>
                    <Nav.Link href="#services" className="dark-mode-text">Search User</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;