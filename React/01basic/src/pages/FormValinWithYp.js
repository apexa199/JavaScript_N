import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Row,Col } from 'react-bootstrap';

export default function CustomerData() {

    const d = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    };

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
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is Required!'),
        });


    }
    return (
        <>
            <div className='container'>
                <Row>
            <Col md={{ span: 5, offset: 3 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16" className='mb-5 text-center'>
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                <h2 className='text-center'>Sign in</h2>

                <Formik initialValues={d}

                    validationSchema={validation}
                    onSubmit={(values) => {

                        console.log(values)

                    }}
                >

                    <Form>
                        <div className="form-group m-3 ">

                            <Field name="Title" as="select" placeholder="Title" width="500px">
                                <option>Title</option>
                                <option value="Mr">Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                            </Field>
                            <ErrorMessage name='city' />

                        </div>

                        <div className="form-group m-3 ">

                            <Field name="text" type="text" placeholder="First Name*" className="form-control" />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group m-3">

                            <Field name="text" type="text" placeholder="Last Name*" className="form-control" />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group m-3">

                            <Field name="email" type="email" placeholder="Email Address*" className="form-control" />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group m-3">

                            <Field name="password" type="password" className="form-control" placeholder="Password*" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div className="form-group m-3">

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
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <button
                                type="button"

                                className="btn btn-warning float-right">
                                Reset
                            </button>
                        </div>


                    </Form>


                </Formik>
                </Col>
                </Row>
            </div>
        </>
    )
}