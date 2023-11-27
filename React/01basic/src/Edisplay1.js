import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Edisplay1 = (props) => {
  return (
    
    <Card style={{ width: '21rem' }}>
    <Card.Img style={{width:'12.5rem',height:'12.5rem'}} variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.price}
      </Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
  )
}

