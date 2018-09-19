import uuid from 'uuid-v4';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/users';


const UserForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      name="firstName"
      placeholder="Name:"
      component="input"
    />
    <Field
      type="text"
      name="lastName"
      placeholder="Last name:"
      component="input"
    />
    <Field
      type="text"
      name="username"
      placeholder="Username:"
      component="input"
    />
    <Field
      type="email"
      name="email"
      placeholder="Email:"
      component="input"
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
})(UserForm);
