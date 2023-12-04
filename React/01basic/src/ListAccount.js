import axios from 'axios'
import React, { useEffect, useState } from 'react';


export const ListAccount = () => {

    const[data,setData] = useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        axios.get("https://real-pear-fly-kilt.cyclic.app/accounts",{
            headers:{
                'Content-Type':'application/json',
                'Authorization' :`bearer ${d?.jwtToken}`
            }
            }).then(y => {
              console.log(y.data)
            })
    } ,[])
  return (
    <div>ListAccount</div>
  )
}
