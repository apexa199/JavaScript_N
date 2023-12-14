import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from "react-bootstrap";
import authfetch from "../axios/intercepForm";

export default function CustomerData() {

  const d = {

    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const validation = () => {

    return Yup.object().shape({

      title: Yup.string().required("Please Enter Title!"),

      firstName: Yup.string().required("Please Enter Your First Name!"),

      lastName: Yup.string().required("Please Enter Your Last Name!"),

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

      confirmPassword: Yup.string()
        .required("Please Enter Your Confirm Password!")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),

      acceptTerms: Yup.bool().oneOf([true], "Accept Terms is Required!"),
    });
  };
  return (
    <>
      <div className="container">
        <Row>
          <Col md={{ span: 5, offset: 3 }}>
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

            <p className="text-center fs-4 ">Sign In</p>

            <Formik
              initialValues={d}
              validationSchema={validation}
              onSubmit={(values) => {
                
                authfetch
                  .post("accounts/register", values)
                  .then((y) => {
                    console.log(y.data);
                  })
                  .catch((u) => {
                    
                    console.log(u)
                  });
              }}
            >
              <Form>
              <div className="form-group m-3 ">
                  <label>Title</label>
                  <Field
                    name="title"
                    type="text"
                    placeholder="Title*"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group m-3 ">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="First Name*"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group m-3">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Last Name*"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </div>

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
                </div>

                <div className="form-group m-3">
                  <label>Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password*"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group form-check m-3">
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    Remember me
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group m-3">
                  <Button type="submit" className="btn btn-primary btn">
                    SIGN IN
                  </Button>
                </div>
              </Form>
            </Formik>

            <div className="row text-primary text-center">
              <Col >
            <u><p className="">Forgot Password?</p></u>
            </Col>
            <Col>
            <u><p>Don't have a account? Sign Up</p></u>
            </Col>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
