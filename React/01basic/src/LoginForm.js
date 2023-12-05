import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import * as Yup from 'yup';
import './index.css';


export const LogInForm = () => {

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

            <div className='container'>
                <div>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                </div>
                <h3 className='text-center'>Login</h3>



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


                            <Form onSubmit={handleSubmit}>
                                {console.log(errors)}

                                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Email Address*"
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

                                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                    <Col sm={4}>
                                    <Form.Control type="text" placeholder="Password*"
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

                                <Button variant="primary" type="submit">LOGIN IN</Button>
                            </Form>

                        )
                    }

                </Formik>

            </div>
        </>
    )
}
