import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const ApplicationNav = () => {
  return (
    <Navbar bg="primary" className='mb-5 fs-5'>
    <Container>

      <Navbar.Brand href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      </Navbar.Brand>
      <Nav className="ml-auto">
      <Nav.Link as={Link} to='/home '>Home</Nav.Link>
      <Nav.Link as={Link} to='/'>Registration</Nav.Link>
        <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>        
        <Nav.Link as={Link} to='/list'>List</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
