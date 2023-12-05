import axios from 'axios'
import React, { useEffect, useState } from 'react';
import authfetch1 from './axios/interceptor';



export const ListAccount = () => {

    const[data,setData] = useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      
       authfetch1.get("/accounts")
        .then(y => {
              console.log(y.data)
            })
    } ,[])
  return (
    <div>ListAccount</div>
  )
}
