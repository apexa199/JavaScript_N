import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useRef } from 'react';


export const SignUpForm = () => {

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  let a = {

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerm: false,
    hobbies: [],
    gender: '',
    city: ''

  }

  const validateSingUp = empData => {

    const errors = {};

    if (!empData.firstName) {
      errors.firstName = 'Please Enter firstName';
    } else if (empData.firstName.length > 20) {
      errors.firstName = 'Name cannot exceed 20 characters';
    }
    if (!empData.lastName) {
      errors.lastName = 'Please Enter firstName';
    } else if (empData.lastName.length > 20) {
      errors.lastName = 'Name cannot exceed 20 characters';
    }

    if (!empData.email) {
      errors.email = 'Please Enter Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
      errors.email = 'Invalid email address';
    }

    if (!empData.password) {
      errors.password = 'Please Enter password';
      passwordRef.current.focus();
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/.test(empData.password)) {
      errors.password = 'Password must contain at least 1 capital letter, 1 small letter, 1 symbol, and 1 number';
      passwordRef.current.focus();
    }

    if (!empData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
      confirmPasswordRef.current.focus();
    } else if (empData.password !== empData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      confirmPasswordRef.current.focus();
    }



    return errors;
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      </div>
      <Formik initialValues={a} validate={validateSingUp} onSubmit={(values) => {

        console.log(values)
      }}>

        <Form>
          <label>FirstName</label>
          <Field id="firstName" name="firstName" placeholder="Please Enter FirstName" />
          <ErrorMessage name='firstName' />
          <br /><br />

          <label>LastName</label>
          <Field id="lastName" name="lastName" placeholder="Please Enter LastName" />
          <ErrorMessage name='lastName' /><br /><br />

          <label>Email</label>
          <Field id="email" name="email" placeholder="Please Enter Email" />
          <ErrorMessage name='email' /><br /><br />

          <label>Password</label>
          <Field id="password" name="password" placeholder="Please Enter password" innerRef={passwordRef} />
          <ErrorMessage name='password' /><br /><br />

          <label>confirmPassword</label>
          <Field id="confirmPassword" name="confirmPassword" placeholder="Please Enter confirmPassword" innerRef={confirmPasswordRef} />
          <ErrorMessage name='confirmPassword' /><br /><br />

          <label>
            <Field type="checkbox" name="acceptTerm" />

            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="hobbies" value=" Painting" />
                Painting
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="Adventure" />
                Adventure
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="Reading" />
                Reading
              </label>
            </div>
          </label>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
          </div><br />

          <Field name="city" as="select">
            <option value="Vadodara">Vadodara</option>
            <option value="Pune">Pune</option>
            <option value="Banglore">Banglore</option>
          </Field>
          <ErrorMessage name='city' />


          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
