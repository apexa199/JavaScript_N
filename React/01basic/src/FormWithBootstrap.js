import React from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const FormWithBootstrap = () => {
    return (
        <div>
            <h2>Sign Up Form</h2>

            <Formik initialValues={{
                firstName: "",
                lastName: ""
            }}
            
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
