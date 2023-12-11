import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import authfetch from '../axioshandler/interceptor';
import { useNavigate } from 'react-router-dom';

export const LogInForm = () => {

  const navi = useNavigate();

 const[form,setform]= useState({
  
    email: "",
    password: "",
  })

  const handleInput = (e) => {

      setform({...form,[e.target.name] : e.target.value})
    }

  
    const handleSubmit = (e) => {

      e.preventDefault();
      console.log(form);

      authfetch.post("accounts/authenticate",form)
      .then(y => {

      localStorage.setItem('userInfo' , JSON.stringify(y.data))

      navi("/home")
      
      }).catch(y => {

        
      })
    }
    

  return (
  <>

    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email Address*"
            onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password*"
            onChange={handleInput} />
        </Form.Group>


      
  <Button variant="primary" type='submit'>Save</Button>
    </Form>

    </>
  )
}
