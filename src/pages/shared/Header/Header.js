import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/ICON/doctor247-logo.png';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <div className="nav-logo">
                        Doctors-24x7
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">DOCTORS</Nav.Link>
                            <Nav.Link as={Link} to="/news">NEWS</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">APPOINTMENT</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                            {/* <Nav.Link as={Link} to="/register">REGISTER</Nav.Link> */}
                            {!user?.email ?
                                <>
                                    <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                                </>
                                : <div className="user-photo">
                                    <div className="btn btn-danger me-2" onClick={logout}>
                                        <FontAwesomeIcon icon={faSignOutAlt}/>
                                        Logout
                                        <br />
                                        <span>{user.displayName?.slice(0, 7).toLowerCase()}...</span>
                                    </div>
                                    <Link to="/userDetails"><img src={user.photoURL} alt="" /></Link>

                                </div>
                            }
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