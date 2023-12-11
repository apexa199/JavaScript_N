import React from 'react'
import { RegistraionForm } from '../components/RegistraionForm'
import { Col, Row } from 'react-bootstrap'

export const Registration = () => {
  return (
    <Row>
         <Col md={{ span: 5, offset: 3 }}>
        <RegistraionForm/>
        </Col>
    </Row>
  )
}
