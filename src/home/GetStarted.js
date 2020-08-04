import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string, ref } from 'yup';
import {
  Grid,
  Box,
  Button,
  Divider,
  makeStyles,
  Stepper,
  Container,
} from '@material-ui/core';
import FormikControl from '../dashboard/admin/common/formik/FormikControl';

import logo from '../assets/img/logo.png';
import signup from '../assets/img/login/signup.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  btnOutline: {
    padding: '14px',
  },
  logo: {
    width: '70px',
    height: '50px',
    paddingLeft: '50px',
    paddingTop: '20px',
  },
  side: {
    paddingTop: '10vh',
  },
  bgImage: {
    backgroundImage: `url(${signup})`,
    backgroundSize: 'cover',
    height: '100vh',

    width: '32vw',
    color: 'white',
    opacity: 0.9,
  },
});

const GetStarted = ({ nextStep, user, handleChange }) => {
  const initialValues = { ...user };

  const classes = useStyles();
  const personalDetailsScema = object({
    password: string().required('Password is required').min(2).max(20),
    password2: string()
      .oneOf([ref('password'), ''], 'Passwords must match')
      .required('Required'),
    email: string().email('Invalid Email').required('Email is required'),
  });

  const handleSubmit = (values, helpers) => {
    // TODO ==> Handle Call to database
    handleChange(values);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Submitted', values);
        nextStep();
        resolve();
      }, 1000);
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item container sm={8}>
        <Grid container item sm={12}>
          <Grid item sm={3}>
            <img src={logo} className={classes.logo} />
          </Grid>
          <Grid item container sm={8}>
            <Grid xs={10}>
              <h1>Lets Get Started</h1>
              <p>First we need you to provided your email and password</p>
            </Grid>
            <Grid xs={2}>
              <Stepper />
            </Grid>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item sm={7}>
            <Formik
              initialValues={initialValues}
              validationSchema={personalDetailsScema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box my={2}>
                        <FormikControl
                          control='input'
                          type='email'
                          name='email'
                          label='Email'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box my={2}>
                        <FormikControl
                          control='input'
                          type='password'
                          name='password'
                          label='Password'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box my={2}>
                        <FormikControl
                          control='input'
                          type='password'
                          name='password2'
                          label='Confirm Password'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        color={'primary'}
                        variant='contained'
                        fullWidth
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Save and Continue
                      </Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Divider />
                    </Grid>
                    <Grid item sm={6}>
                      <Button
                        color={'primary'}
                        variant='outlined'
                        className={classes.btnOutline}
                        fullWidth
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Use Gmail
                      </Button>
                    </Grid>

                    <Grid item sm={6}>
                      <Button
                        color={'secondary'}
                        variant='contained'
                        fullWidth
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Use Facebook
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Grid>
      <Grid container item sm={4} className={classes.bgImage}>
        <Container>
          <Grid container spacing={2} className={classes.side}>
            <Grid item sm={8}>
              <h4>Already have an account?</h4>
            </Grid>
            <Grid item sm={4}>
              <Link to='/login'>
                <Button fullWidth color='primary'>
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div style={{ minHeight: '50vh' }}></div>
          </Grid>

          <Grid item xs={12}>
            <h3 style={{ textAlign: 'center' }}>
              Track and Manage Sales with <br></br>{' '}
              <span className='strong'> min.ng</span>
            </h3>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

GetStarted.propTypes = {
  nextStep: PropTypes.func.isRequired,

  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
  }),
};
export default GetStarted;
