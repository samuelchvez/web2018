import uuid from 'uuid-v4';
import validator from 'email-validator';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/users';


const renderInput = ({ input, meta, ...props }) => (
  <div className="my-input">
    {
      meta.error && meta.touched && (
        <div className="error">
          { meta.error }
        </div>
      )
    }
    <input {...input} {...props} />
  </div>
);

const UserForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      name="firstName"
      placeholder="Name:"
      component={renderInput}
    />
    <Field
      type="text"
      name="lastName"
      placeholder="Last name:"
      component={renderInput}
    />
    <Field
      type="text"
      name="username"
      placeholder="Username:"
      component={renderInput}
    />
    <Field
      type="email"
      name="email"
      placeholder="Email:"
      component={renderInput}
    />
    <button type="submit">
      Agregar!
    </button>
  </form>
);


export default reduxForm({
  form: 'createUserForm',
  onSubmit(values, dispatch) {
    console.log(uuid())
    dispatch(actions.addUser(
      uuid(),
      values.firstName,
      values.lastName,
      values.email,
      values.username,
    ));
  },
  validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required!";
    } else {
      if (!validator.validate(values.email)) {
        errors.email = "Email is invalid!";
      }
    }

    return errors;
  }
})(UserForm);
