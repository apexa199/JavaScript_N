import React from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const LogInForm = () => {
  return (
  <>

    <Form>
        <Form.Group className="mb-3" controlId="">
      <Form.Label>Email Address</Form.Label>
      <Form.Control  type="email"  name="email" placeholder="Email Address*" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Password</Form.Label>
      <Form.Control  type="password"  name="password" placeholder="Password*" />
    </Form.Group>

      
  <Button variant="primary">Save</Button>
    </Form>

    </>
  )
}
