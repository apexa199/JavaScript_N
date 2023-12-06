import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import {Route,Routes} from 'react-router-dom';
import { RegistrationForm } from '../RegistrationForm';
import { LogInForm1 } from '../LogInForm1';



export const LogInNav = () => {

  return (
    <>
      

    <div>
    <Navbar as={Row} bg="primary"  className='mb-5'>
        <Container>
          <Col>
          <Navbar.Brand href="">
            <img
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
          <Navbar.Brand href="">Registration Login</Navbar.Brand>
          </Col>
          <Col>
          <Nav className="ml-auto" >
            <Nav.Link  href="">LOG IN</Nav.Link>
            <Nav.Link href="">SIGN UP</Nav.Link>
            <Nav.Link href="">DASHBORAD</Nav.Link>
          </Nav>
          </Col>  
        </Container>
      </Navbar>

  
       <Routes>
      <Route path= "/" element={<LogInForm1/>}></Route>
      <Route path= "Registration" element={<RegistrationForm/>}></Route>
    </Routes>
    </div>
    </>
  )
}
