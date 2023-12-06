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
            <h2 className='text-center'>Login</h2>

            <Formik initialValues={{
                email: "",
                password: ""
            }}

                validationSchema={validation}

                onSubmit={(values,{setSubmitting}) => {

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
