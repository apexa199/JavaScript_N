import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Edisplay } from './Edisplay1';


export const Ecommerce1 = () => {

  const [data,setData]  = useState([])
  console.log(data);

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
    .then(y => {

      setData(y.data);

    },[])

  })
  return (
    <>
      {
        data.map((v) =>{

          return(<Edisplay title ={v.title}/>)
        })
      }
    </>
  )
}
