import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const ApplicationNav = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='mb-4'>
    <Container>

      <Navbar.Brand href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="">Log In</Nav.Link>
        <Nav.Link href="">Registration</Nav.Link>
        <Nav.Link href="">List</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
