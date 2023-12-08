import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authfetch from '../axioshandler/interceptor';


export const RegistraionForm = () => {

  const [form, setform] = useState({

    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })

  const handleInput = (e) => {

    if (e.target.type === "checkbox") 
    {
      setform({...form,[e.target.name] : e.target.checked})
    }
    else 
    {
      setform({...form,[e.target.name] : e.target.value})
    }

  }
    const handleSubmit = (e) => {

      e.preventDefault();
      console.log(form);

      authfetch.post("accounts/register",form)
      .then(y => {

        console.log(y)

      }).catch(y => {

        console.log(y)
      })
    }
    return (


      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Title*"
            onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" placeholder="First Name*"
            onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Last Name*"
            onChange={handleInput} />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password*"
            onChange={handleInput} />
        </Form.Group>

        <Form.Check // prettier-ignore
          type="switch" id="custom-switch" label="accept Terms" name="acceptTerms" className='mb-3'
          onChange={handleInput}
        />

        <Button type="submit" variant="primary">Save</Button>
        <Button type="reset" variant="danger">Reset</Button>

      </Form>

    )
  
}
