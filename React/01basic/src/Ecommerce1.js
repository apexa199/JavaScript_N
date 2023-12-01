import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Edisplay1 } from './Edisplay1';
import NavBarComponent from './NavBarComponent'




export const Ecommerce = () => {

   const [data,setData]= useState([])
   console.log(data);

    useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    
    .then(y=>{

        setData(y.data);
        
    }).catch(y=>{
        console.log(y);
    })

    },[])
  return (
  <>
    <Container>
    <NavBarComponent />
      <Row>      
      {  
             
        data.map((v)=>{
             return ( <Edisplay1 title={v.title} des={v.description} price={v.price} img={v.image}/>)
         }) }
         </Row>
       
         </Container>
         
         </>
      
  )
}
