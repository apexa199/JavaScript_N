import React from 'react';
import { LogInForm } from '../components/LogInForm';
import { Col, Row } from 'react-bootstrap'

export const LogIn = () => {
  return (
    <Row>
      <Col>
        <LogInForm/>
        </Col>
    </Row>
  )
}
