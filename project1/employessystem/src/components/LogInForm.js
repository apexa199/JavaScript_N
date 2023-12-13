import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import authfetch from "../axioshandler/interceptor";
import { useNavigate } from "react-router-dom";

export const LogInForm = () => {
  
  const navi = useNavigate();

  const [form, setform] = useState({

    email: "",
    password: "",
  });

  const handleInput = (e) => {
    
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(form);

    authfetch.post("accounts/authenticate", form)
      .then((y) => {
        
        localStorage.setItem("userInfo", JSON.stringify(y.data));

        navi("/home");
        
      })
      .catch((y) => {});
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

      <p className="text-center fs-4">Log In</p>

      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit" className="mt-3 button1">
         LOGIN 
        </Button>

        <u className="text-primary text-center "><p className="mt-3">Forgot Password?</p></u>
      </Form>
    </>
  );
};
