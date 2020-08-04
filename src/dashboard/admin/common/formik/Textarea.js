import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FormGroup, TextField } from '@material-ui/core';
import TextError from './TextError';

const TextArea = (props) => {
  const { name, label, ...rest } = props;
  return (
    <FormGroup>
      <Field
        name={name}
        as={TextField}
        label={label}
        autoComplete='off'
        variant='outlined'
        multiline
        rows='5'
        {...rest}
      />
      <ErrorMessage name='email' component={TextError} />
    </FormGroup>
  );
};

export default TextArea;
