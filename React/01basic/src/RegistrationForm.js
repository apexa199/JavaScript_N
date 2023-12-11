import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Yup from 'yup';



export const RegistrationForm = () => {

    const validation = () => {

        return Yup.object().shape({

            firstName: Yup.string()
                .required('Please Enter Your First Name!'),

            lastName: Yup.string()
                .required('Please Enter Your Last Name!'),

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

            confirmPassword: Yup.string()
                .required('Please Enter Your Confirm Password!')

        });

    }

    let a = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerm: false
    }
    return (
        <>
            <div className='container '>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <h2 className='text-center'>Sign In</h2>

                <Formik initialValues={a}

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

                                <Form.Select as={Row} className='mb-4 addcenter' aria-label="Default select example">

                                    <option>Title</option>
                                    <option value="1">Mr</option>
                                    <option value="2">Miss</option>
                                    <option value="3">Mrs</option>

                                </Form.Select>

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="First Name*"
                                            name='firstName'
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={(touched.firstName) && errors.firstName ? "error" : null}
                                        />
                                    </Col>
                                    <Form.Text className="text-muted">
                                        {touched.firstName && errors.firstName ? (<div className="error-message">{errors.firstName}</div>
                                        ) : null}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Last Name*"
                                            name='lastName'
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={(touched.lastName) && errors.lastName ? "error" : null}
                                        />
                                    </Col>
                                    <Form.Text className="text-muted">
                                        {touched.lastName && errors.lastName ? (<div className="error-message">{errors.lastName}</div>
                                        ) : null}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
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

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
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

                                <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
                                    <Col sm={4}>
                                        <Form.Control type="text" placeholder="Confirm Password*"
                                            name='confirmPassword'
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={touched.confirmPassword && errors.confirmPassword ? "error" : null}
                                        />
                                    </Col>
                                    <Form.Text className="text-muted">
                                        {touched.confirmPassword && errors.confirmPassword ? (
                                            <div className="error-message">{errors.confirmPassword}</div>
                                        ) : null}
                                    </Form.Text>
                                </Form.Group>

                                <Button className="btn btn-primary mb-2 addcenter" type="submit">SIGN IN</Button>
                            </Form>

                        )
                    }

                </Formik>
            </div>
        </>
    )
}
