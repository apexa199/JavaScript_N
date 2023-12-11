import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const LogInNav = () => {

  return (
    <>
      <div>
        <Navbar  bg="primary" className='mb-5 '>
        <Container>
              <Navbar.Brand >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="26"  viewBox="0 0 16 16">
                  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
          
              </Navbar.Brand>            
  
              <Nav className="ml-auto" >
                <Nav.Link as={Link} to='/loginform'>LOG IN</Nav.Link>
                <Nav.Link as={Link} to='/'>SIGN UP</Nav.Link>
                <Nav.Link as={Link} to='/dashboard'>DASHBORAD</Nav.Link>
              </Nav>
          </Container>
        </Navbar>     
      </div>
    </>
  )
}
