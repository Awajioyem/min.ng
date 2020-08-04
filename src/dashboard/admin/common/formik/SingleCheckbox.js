import React from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import { useField, ErrorMessage } from 'formik';
import TextError from './TextError';

const SingleCheckbox = (props) => {
  const { name, value, label } = props;
  const [field] = useField({
    name: name,
    type: 'checkbox',
  });

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...props} {...field} />}
        label={label}
      />
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default SingleCheckbox;
