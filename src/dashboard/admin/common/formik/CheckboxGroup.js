import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const CheckboxGroup = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <FormGroup>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => (
            <FormControlLabel
              key={option.key}
              control={
                <Checkbox
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
              }
              label={option.key}
            />
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default CheckboxGroup;
