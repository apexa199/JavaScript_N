import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import './index.css';
import NavbarComponent from './NavBarComponent';
import { Col, Row } from 'react-bootstrap';


export const LogInForm1 = () => {

    const validation = () => {

        return Yup.object().shape({
            email: Yup.string()
                .required('Please Enter Your Email!')
                .email('Email is invalid')
                .matches(/[0-9]/, 'email requires a number')
                .matches(/[a-z]/, 'email requires a lowercase letter')
                .matches(/[A-Z]/, 'email requires an uppercase letter')
                .matches(/[^\w]/, 'email requires a symbol'),


            password: Yup.string()
                .required('Please Enter Your Password!')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters')
                .matches(/[0-9]/, 'email requires a number')
                .matches(/[a-z]/, 'email requires a lowercase letter')
                .matches(/[A-Z]/, 'email requires an uppercase letter')
                .matches(/[^\w]/, 'email requires a symbol'),

        });

    }

    return (
        <>

            <div className=' container'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <h2 className='text-center'>Login</h2>

                <Formik initialValues={{
                    email: "",
                    password: ""
                }}

                    validationSchema={validation}

                    onSubmit={(values, { setSubmitting }) => {

                        setSubmitting(true);
                        console.log(values)
                    }}>


                    {
                        ({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting }) => (

                            <Form onSubmit={handleSubmit} className='m-auto'>
                                {console.log(errors)}

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Email Address"
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={(touched.email) && errors.email ? "error" : null}
                                        />
                                    </Col>
                                    <Form.Text className="text-muted">
                                        {touched.email && errors.email ? (<div className="error-message">{errors.email}</div>
                                        ) : null}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Password"
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={touched.password && errors.password ? "error" : null}
                                        />
                                    </Col>
                                    <Form.Text className="text-muted">
                                        {touched.password && errors.password ? (
                                            <div className="error-message">{errors.password}</div>
                                        ) : null}
                                    </Form.Text>
                                </Form.Group>




                                <input className="btn btn-primary mb-2 addcenter" type="submit" value="LOGIN IN" />
                            </Form>

                        )
                    }


                </Formik>
                <p className="text-primary">Forgot Password?</p>
            </div>
        </>
    )
}
