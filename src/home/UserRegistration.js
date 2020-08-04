import React, { useState } from 'react';
import GetStarted from './GetStarted';
import AlmostThere from './AlmostThere';
import Confirmation from './Confirmation';
import { makeStyles } from '@material-ui/core';
import background from '../assets/img/background/registrationBackground.png';

const useStyles = makeStyles({
  paper: {
    overflow: 'hidden',
    //backgroundImage: `url(${background})`,
    //backgroundSize: 'cover',
    //height: '97vh',
    //width: '100vw',
    //color: 'white',
    //opacity: 10,
  },
});

const UserRegistration = () => {
  const classes = useStyles();
  const initialState = {
    email: '',
    password: '',
    password2: '',
    phone: '',
    city: '',
    state: '',
    country: '',
  };

  const [user, setUser] = useState(initialState);
  const [step, setStep] = useState(1);
  console.log(step);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Input is provided input from calling form
  // HandleChange handled by formik
  const handleChange = (formData) => {
    setUser({ ...formData });
  };
  console.log(user);
  let view;
  switch (step) {
    case 1:
      view = (
        <GetStarted
          nextStep={nextStep}
          user={user}
          handleChange={handleChange}
        />
      );
      break;
    case 2:
      view = (
        <AlmostThere
          nextStep={nextStep}
          prevStep={prevStep}
          user={user}
          handleChange={handleChange}
        />
      );
      break;
    case 3:
      view = (
        <Confirmation
          prevStep={prevStep}
          user={user}
          handleChange={handleChange}
        />
      );
      break;
    default:
      return null;
  }

  return <div className={classes.paper}>{view}</div>;
};

export default UserRegistration;
