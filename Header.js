import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <>
        <Navbar bg='dark' expand='md'>
            <Container >
                <Navbar.Brand href='#' className='fw-bolder text-white'>Good <span className='changeColor'>First</span> Issue</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to={'/'} className='text-white '>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/about'} className='text-white '>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header