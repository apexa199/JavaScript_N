import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Edisplay1 = ({title,img,des,price}) => {
  return (<>  

        <Col sm={4} className="mb-3">
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

