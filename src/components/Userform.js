import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./Form.css";

const formSchema = yup.object().shape({
  name: yup.string().required("Please Enter Your Name"),
  email: yup.string().email('Invalid Email').required('Email is required'),
  phone: yup.number().required('Please Enter Mob. No.'),
  password: yup.string().required().min(5).max(20),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Confirm Password must match with Password').required('Confirm Password is required')
});

const Userform = () => {
  const submitHandler = () => {  
  };
  return (
    <div className="form">
      <Formik
        validationSchema={formSchema}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword:''
        }}
        onSubmit={submitHandler}
      >
        {({
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
          isValid,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
              />
              <span className="error-msg">{touched.name && errors.name}</span>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              <span className="error-msg">{touched.email && errors.email}</span>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
              />
              <span className="error-msg">{touched.phone && errors.phone}</span>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              <span className="error-msg">{touched.password && errors.password}</span>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                name="confirmPassword"
              />
              <span className="error-msg">{touched.confirmPassword && errors.confirmPassword}</span>
            </div>
            <button type="submit" className="btn btn-primary" disabled={ !isValid }>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Userform;
