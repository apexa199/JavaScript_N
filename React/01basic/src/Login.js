import React, { useState } from 'react'
import { ListAccount } from './ListAccount';
import axios from 'axios';
import authfetch1 from './axios/interceptor';


export const Login = () => {

   const [data,setData] =  useState({

    email :"",
    password:"",
    })

    const handleSubmit = (e) => {

        e.preventDefault();

        authfetch1.post("accounts/authenticate",data)
        .then(y =>{

          localStorage.setItem("token",JSON.stringify(y.data))
          console.log(y.data);
          
        }).catch(u => {

          console.log(u)
        })
    }

    const handleInput = (e) => {

        setData({...data,[e.target.name] : e.target.value})
    }
  return (
    <>
<ListAccount/>
    <form onSubmit={handleSubmit}>
         <input type='text' name='email' value={data.email} onChange={handleInput}/>
         <input type='text' name='password' value={data.password} onChange={handleInput}/>
         <input type='submit' value="save" />
    </form>

   
    </>
  )
}

