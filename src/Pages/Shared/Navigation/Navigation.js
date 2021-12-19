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

                        <Nav.Link active className="navLinks fw-bolder d-flex justify-content-center align-items-center" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder d-flex justify-content-center align-items-center" as={HashLink} to="/home#portfolio">Our Portfolio</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder d-flex justify-content-center align-items-center" as={HashLink} to="/home#services">Our Service</Nav.Link>
                        <Nav.Link className="navLinks fw-bolder d-flex justify-content-center align-items-center" as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {user?.email && <Nav.Link className="navLinks fw-bolder d-flex justify-content-center align-items-center" as={HashLink} to="/dashboard">Dashboard</Nav.Link>}
                        {
                            user?.email && <Nav.Link className="fw-bolder d-flex justify-content-center align-items-center" > {user?.displayName}  </Nav.Link>

                        }
                        {
                            user?.email && <Nav.Link className="fw-bolder" >
                                <img src={user.photoURL} alt="" height="45" className='shadow-sm rounded-circle d-flex justify-content-center align-items-center' />
                            </Nav.Link>

                        }
                        {
                            !user?.email ? <Link to="/login"><Button className="login-btn">Login<IoIosLogIn className='m-1'></IoIosLogIn></Button></Link>
                                :
                                <Nav.Link><Button className="login-btn" onClick={googleLogOuthandler}>Logout<IoIosLogOut className='m-1'></IoIosLogOut></Button></Nav.Link>

                        }



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;