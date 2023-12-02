import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const FormWithBootstrap = () => {

    const validation = () => {

        return Yup.object().shape({
            fullname: Yup.string()
            .required('firstName is required')
            .min(6, 'firstName must be at least 6 characters')
            .max(20, 'firstName must not exceed 20 characters'),
            
            username: Yup.string()
            .required('lastName is required')
            .min(6, 'lastName must be at least 6 characters')
            .max(20, 'lastName must not exceed 20 characters'),

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
        <div>
            <h2>Sign Up Form</h2>                

            <Formik initialValues={{
                firstName: "",
                lastName: ""
            }}

            validationSchema={validation}
            
            onSubmit={(values) => {

                console.log(values)
            }}>


                {
                    ({values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting }) => (

                        <Form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            {console.log(values)}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control type="text" placeholder="Enter text" 
                                name='firstName' 
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" placeholder="Enter text" 
                                name='lastName' 
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }


            </Formik>
        </div>
    )
}
