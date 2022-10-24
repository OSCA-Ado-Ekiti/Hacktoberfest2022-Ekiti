import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Header.css';
const Header = () => {
    return (
        <>
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="#" className="fw-bolder">
                        {' '}
                        <span className="changeColor">
                            Good First Issue
                        </span>{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-3">
                            <Nav.Link as={Link} to={'/'}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/about'}>
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
