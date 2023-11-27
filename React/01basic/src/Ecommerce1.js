import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Edisplay1 } from './Edisplay1';



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
      {        
        data.map((v)=>{
             return ( <Edisplay1 title={v.title} price={v.price} img={v.image}/>)
         }) }
       </>
  )
}
