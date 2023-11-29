import React from 'react';
import {Formik, Field, Form } from 'formik';

export const RegistrationForm = () => {
    let a = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerm: false   
    }
  return (
    
   <div>
    
    <h2>Registration Form</h2>

    <Formik  initialValues={a} onSubmit={(values)=>{

        console.log(values)
    }}>

        <Form>
            <label>FirstName</label>
            <Field id="firstName" name="firstName" placeholder="Please Enter FirstName" /><br/><br/>

            <label>LastName</label>
            <Field id="lastName" name="lastName" placeholder="Please Enter LastName" /><br/><br/>

            <label>Email</label>
            <Field id="email" name="email" placeholder="Please Enter Email" /><br/><br/>

            <label>Password</label>
            <Field id="password" name="password" placeholder="Please Enter Password" /><br/><br/>

            <label> Confirm Password</label>
            <Field id="confirmPassword" name="confirmPassword" placeholder="Please Enter Confirm Password" /><br/><br/>          

            <label>
            <Field type="checkbox" name="acceptTerm" />
            </label>
            <button type="submit">Submit</button>
        </Form>
        
    </Formik>
   </div> 
   )
}
