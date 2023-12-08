import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { RegistrationForm } from '../RegistrationForm';
import { LogInForm1 } from '../LogInForm1';



export const LogInNav = () => {

  return (
    <>


      <div>
        <Navbar  bg="primary" className='mb-5 '>
      
              <Navbar.Brand href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
              </Navbar.Brand>

              <Navbar.Brand href="">Registration</Navbar.Brand>
  
              <Nav className="ml-auto" >
                <Nav.Link href="">LOG IN</Nav.Link>
                <Nav.Link href="">SIGN UP</Nav.Link>
                <Nav.Link href="">DASHBORAD</Nav.Link>
              </Nav>
          
        </Navbar>


        <Routes>
          <Route path="/" element={<LogInForm1 />}></Route>
          <Route path="Registration" element={<RegistrationForm />}></Route>
        </Routes>
      </div>
    </>
  )
}
