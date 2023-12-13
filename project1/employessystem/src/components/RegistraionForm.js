import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import authfetch from "../axioshandler/interceptor";
import Col from "react-bootstrap/esm/Col";


export const RegistraionForm = () => {

  const [form, setform] = useState({
    
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleInput = (e) => {

    if (e.target.type === "checkbox") {

      setform({ ...form, [e.target.name]: e.target.checked });
    } 
    else {
      setform({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(form);

    authfetch.post("accounts/register", form)
      .then((y) => {

        console.log(y.data);
        
      })
      .catch((y) => {

      });
  };

  return (
    <>
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 16 16"
          className="m-2 text-center"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      </div>

      <p className="text-center fs-4">Sign In</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email Address*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password*"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="accept Terms"
          name="acceptTerms"
          className="mb-3"
          onChange={handleInput}
        />
  

        <Button type="submit" variant="primary" className="mt-3 button1">
          SIGN IN
        </Button>
      
        
         <div className="row text-primary text-center mt-3">
              <Col >
            <u><p>Forgot Password?</p></u>
            </Col>
            <Col>
            <u><p>Don't have a account? Sign Up</p></u>
            </Col>
            </div>
      </Form>
    </>
  );
};
