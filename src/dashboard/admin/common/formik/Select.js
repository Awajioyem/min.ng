import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FormGroup, TextField, MenuItem } from '@material-ui/core';
import TextError from './TextError';

const Input = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <FormGroup>
      <Field
        name={name}
        as={TextField}
        label={label}
        autoComplete='off'
        variant='outlined'
        select
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default Input;
