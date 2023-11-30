import { Formik, Field ,Form} from 'formik';
import * as Yup from 'yup';
import React from 'react';

export const SignUpForm = () => {

    let a = {

        firstName: '',
        lastName: '',
        email: '',
        acceptTerm: false,
        hobbies: [],
        gender: '',
        city :''

    }

    const  validateSingUp = empData => {

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
      errors.email = 'Please Enter firstName';
    } else if (empData.email.length > 20) {
      errors.email = 'Invalid email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = 'Invalid email address';
  }

    if (!empData.password) {
        errors.password = 'Please Enter firstName';
      } else if (empData.password.length > 20) {
        errors.password = 'Name cannot exceed 20 characters';
      }else if(Yup.object().shape({password: Yup.string().min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol')})){
        errors.password="Invalid Password"
      }
    
  
    return errors;
  };

    return (
        <div>
            <h2>Sign Up Form</h2>

            <Formik initialValues={a} validate={validateSingUp} onSubmit={(values) => {

                console.log(values)
            }}>

                <Form>
                    <label>FirstName</label>
                    <Field id="firstName" name="firstName" placeholder="Please Enter FirstName" /><br /><br />

                    <label>LastName</label>
                    <Field id="lastName" name="lastName" placeholder="Please Enter LastName" /><br /><br />

                    <label>Email</label>
                    <Field id="email" name="email" placeholder="Please Enter Email" /><br /><br />

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


                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
