import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Doctors-247</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">DOCTORS</Nav.Link>
                            <Nav.Link as={Link} to="/labtest">LAB TEST</Nav.Link>
                            <Nav.Link as={Link} to="/specialities">SPECIALITIES</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            {/* {!user?.email ?
                                <>
                                    <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                                </>
                                : <span className="user-photo">
                                    <Link to="/login"><img src={user.photoURL} alt="" /></Link>
                                    
                                </span>
                            } */}
                        </Nav>
                        <Navbar.Text>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;