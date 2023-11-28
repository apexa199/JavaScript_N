import React from 'react';
import {Formik, Field } from 'formik';

export const SignUpForm= () => {
    let a = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        Confirmpassword: '',
        acceptTerm:''
    }
  return (
    
   <div>
    
    <h2>Registration Form</h2>

    <Formik  initialValues={a} onSubmit={(values)=>{

        console.log(values)
    }}>

        <form>
            <label>FirstName</label>
            <Field id="firstName" name="firstName" placeholder="Please Enter FirstName" /><br/><br/>

            <label>LastName</label>
            <Field id="LasttName" name="LastName" placeholder="Please Enter LastName" /><br/><br/>

            <label>Email</label>
            <Field id="Email" name="Email" placeholder="Please Enter Email" /><br/><br/>

            <label>Password</label>
            <Field id="Password" name="Password" placeholder="Please Enter Password" /><br/><br/>

            <label> Confirm Password</label>
            <Field id="Confirm Password" name="Confirm Password" placeholder="Please Enter Confirm Password" /><br/><br/>          

            <button type="submit">Submit</button>
        </form>
        
    </Formik>
   </div> 
   )
}
