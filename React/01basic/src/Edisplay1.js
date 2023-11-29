import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const Edisplay1 = ({title,img,des,price}) => {
  return (<>  
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Products</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>

          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#cart">
            <img
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Cart"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

        <Col sm={4} className="mb-3" className="">
          <Card style={{ width: '26rem' }}>
            <Card.Img style={{ width: '12.5rem', height: '12.5rem' }} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{des}</Card.Text>
              <Card.Text>{price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
  </>
  )
}

