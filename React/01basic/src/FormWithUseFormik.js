import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.css';

export const FormWithUseFormik = () => {


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
    });


  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    validationSchema: { validation },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error-message">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
       {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error-message">{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       {formik.touched.email && formik.errors.email ? (
        <div className="error-message">{formik.errors.email}</div>
      ) : null}

      
      <button type="submit">Submit</button>
    </form>
  );
};
