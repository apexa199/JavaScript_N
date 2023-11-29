import { Formik, Field ,Form} from 'formik'
import React from 'react'

export const SignUpForm = () => {

    let b = {

        firstName: '',
        lastName: '',
        email: '',
        acceptTerm: false,
        hobbies: [],
        gender: '',
        city :''

    }

    return (
        <div>
            <h2>Sign Up Form</h2>

            <Formik initialValues={b} onSubmit={(values) => {

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
