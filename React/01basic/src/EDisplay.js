import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const EDisplay = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={v.image}/>
    <Card.Body>
   
    <Card.Title>{v.title}</Card.Title>
    <Card.Text>{v.description}</Card.Text>
    <Card.Text><b>{v.price}</b></Card.Text>
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  )
}
