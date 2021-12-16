import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className="img-fluid logo" width="150" height="47" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <Nav.Link className="navLinks" href="#features">Home</Nav.Link>
                        <Nav.Link className="navLinks" href="#pricing">Our Portfolio</Nav.Link>
                        <Nav.Link className="navLinks" href="#pricing">Our Team</Nav.Link>
                        <Nav.Link className="navLinks" href="#pricing">Contact Us</Nav.Link>
                        <Nav.Link className="fw-bolder" >Hello: Taseen Bappi</Nav.Link>
                        <Link to="/login"><Button className="login-btn">Login</Button></Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;