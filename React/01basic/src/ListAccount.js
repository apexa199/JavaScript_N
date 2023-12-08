
import React, { useEffect, useState } from 'react';
import authfetch1 from './axios/interceptor';
import fetchauth from './axios/customaxios';



export const ListAccount = () => {

    const[data,setData] = useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
      
       authfetch1.get("/accounts")
        .then(y => {

              console.log(y.data)
            }).catch(u => {

              console.log(u)
            })
    } ,[])
  return (
    <div>ListAccount</div>
  )
}
