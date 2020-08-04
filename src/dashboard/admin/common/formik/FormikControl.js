import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import SingleCheckbox from './SingleCheckbox';
import CheckboxGroup from './CheckboxGroup';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'checkbox':
      return <SingleCheckbox {...rest} />;
    // case 'radio':
    //   return <RadioButtons {...rest} />;
    case 'checkboxes':
      return <CheckboxGroup {...rest} />;
    // case 'date':
    //   return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
