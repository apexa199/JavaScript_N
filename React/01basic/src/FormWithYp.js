import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
            .required('firstName is required'),
         
            lastName: Yup.string()
                .required('lastName is required'),
                

            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid')
                .matches(/[0-9]/, 'email requires a number')
                .matches(/[a-z]/, 'email requires a lowercase letter')
                .matches(/[A-Z]/, 'email requires an uppercase letter')
                .matches(/[^\w]/, 'email requires a symbol'),
                
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters')
                .matches(/[0-9]/, 'email requires a number')
                .matches(/[a-z]/, 'email requires a lowercase letter')
                .matches(/[A-Z]/, 'email requires an uppercase letter')
                .matches(/[^\w]/, 'email requires a symbol'),
                
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
        });


    }
    return (
        <Formik initialValues={d}

            validationSchema={validation}
            onSubmit={(values) => {

                console.log(values)

            }}
        >

            <Form>

                <div className="form-group">
                <label htmlFor="text"> FirstName </label>
                    <Field name="text" type="text" className="form-control" />
                    <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text"> LastName </label>
                    <Field name="text" type="text" className="form-control" />
                    <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                        name="password"
                        type="password"
                        className="form-control"
                    />
                    <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                    />
                    <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group form-check">
                    <Field
                        name="acceptTerms"
                        type="checkbox"
                        className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                        I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                        name="acceptTerms"
                        component="div"
                        className="text-danger"
                    />
                </div>

                <div className="form-group">
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
    )
}