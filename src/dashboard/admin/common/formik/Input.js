import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import { FormGroup, TextField } from '@material-ui/core';
import TextError from './TextError';

const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <FormGroup>
      <Field
        name={name}
        as={TextField}
        label={label}
        autoComplete='off'
        variant='outlined'
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
