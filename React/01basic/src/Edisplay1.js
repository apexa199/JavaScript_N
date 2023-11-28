import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Edisplay1 = (props) => {
  return (
    <div className='root1'>
      <Row>
        <Col sm={4}>
          <Card style={{ width: '21rem' }}>
            <Card.Img style={{ width: '12.5rem', height: '12.5rem' }} variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <Card.Text>{props.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

