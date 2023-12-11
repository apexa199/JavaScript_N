import React from 'react';
import { LogInForm } from '../components/LogInForm';
import { Col, Row } from 'react-bootstrap'

export const LogIn = () => {
  return (
    <Row>
         <Col md={{ span: 5, offset: 3 }}>
        <LogInForm/>
        </Col>
    </Row>
  )
}
