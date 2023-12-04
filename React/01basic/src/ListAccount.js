import axios from 'axios'
import React, { useEffect, useState } from 'react';
import fetchauth from './axios/customaxios';


export const ListAccount = () => {

    const[data,setData] = useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      
        fetchauth.get("/accounts")
        .then(y => {
              console.log(y.data)
            })
    } ,[])
  return (
    <div>ListAccount</div>
  )
}
