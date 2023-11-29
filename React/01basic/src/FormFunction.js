import React, { useState } from 'react';

export const FormFunction = () => {

    const [data,setData] = useState({
        firstName : "",
        lastName : ""
    });

    const handleInput = (e) => {

        setData({...data,[e.target.name] : e.target.value})
    }

    const saveInfo = (e) =>{

        e.preventDefault();
        console.log(data);
    }
    
    const handleInputForFirstName = (e) => {

        setData({...data,firstName : e.target.value})

    }     
    const handleInputForLastName = (e) => {

       setData({...data,lastName : e.target.value}) 
    }

  return (
    <form onSubmit={saveInfo}>

        <input type='text' name='firstName' placeholder='please enter your firstName' onChange={handleInput} />
        <input type='text' name='lastName' placeholder='please enter your lastName' onChange={handleInput} />
        <input type='submit' value="save" />

    </form>
  )
}
