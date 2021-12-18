import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo-1.svg';
import './Navigation.css';
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, googleLogOuthandler } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='shadow-sm'>
            <Container fluid>
                <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" className="img-fluid logo" width="140" height="35" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <Nav.Link active className="navLinks fw-bolder" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder" as={HashLink} to="/home#portfolio">Our Portfolio</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder" href="#pricing">Our Team</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder" as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {
                            user && <Nav.Link className="fw-bolder" > {user?.displayName}</Nav.Link>

                        }
                        {
                            !user.displayName ? <Link to="/login"><Button className="login-btn">Login<IoIosLogIn className='m-1'></IoIosLogIn></Button></Link>
                                :
                                <Button className="login-btn" onClick={googleLogOuthandler}>Logout<IoIosLogOut className='m-1'></IoIosLogOut></Button>

                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;