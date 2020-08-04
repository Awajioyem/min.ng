import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { useField } from 'formik';

const CustomCheckbox = (props) => {
  const { name, value, label } = props;
  const [field] = useField({
    name: name,
    type: 'checkbox',
    value: value,
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={label}
    />
  );
};

export default CustomCheckbox;
