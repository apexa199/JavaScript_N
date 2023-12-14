import React from "react";
import { Formik , Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Col, Row,Button} from "react-bootstrap";
import authfetch from "../axios/intercepForm";
import { useNavigate } from "react-router-dom";

export const LogInForm1 = () => {

const navi =  useNavigate() 

const validation = () => {
    return Yup.object().shape({
      email: Yup.string()
        .required("Please Enter Your Email!")
        .email("Email is invalid")
        .matches(/[0-9]/, "email requires a number")
        .matches(/[a-z]/, "email requires a lowercase letter")
        .matches(/[^\w]/, "email requires a symbol"),

      password: Yup.string()
        .required("Please Enter Your Password!")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters")
        .matches(/[0-9]/, "email requires a number")
        .matches(/[a-z]/, "email requires a lowercase letter")
        .matches(/[^\w]/, "email requires a symbol"),
    });
  };

  return (
    <>
      <div className=" container  ">
        <Row>
          <Col md={{ span: 5, offset: 3 }}>
       
          <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 16 16"
                  className="m-2 text-center">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
       
            <p className="text-center fs-4">Log In</p>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validation}
              onSubmit={(values) => {

                authfetch.post("accounts/authenticate",values)
                .then(y =>{
            
                  localStorage.setItem("token",JSON.stringify(y.data))
                  navi('/dashboard');
                  console.log(y.data);
                  
                }).catch(u => {
            
                  console.log(u)
                })
            
               
              }}
            >
              <Form  className="m-auto">                 

                  <div className="form-group m-3">
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group m-3">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password*"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div >
                <div className="form-group m-3">
                  <Button type="submit" className="btn btn-primary btn">
                    LOGIN IN
                  </Button>
                  </div>
                </Form>
            </Formik>

           <u className="text-primary text-center"><p>Forgot Password?</p></u>
          </Col>
        </Row>
      </div>
    </>
  );
};
