import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import {
  Grid,
  Box,
  Button,
  Divider,
  makeStyles,
  Stepper,
  Container,
  IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormikControl from '../dashboard/admin/common/formik/FormikControl';

import personalDetails from '../assets/img/login/personalDetails.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  btnOutline: {
    padding: '14px',
  },
  backBtn: {
    paddingTop: '3vh',
    paddingLeft: '10vh',
  },
  side: {
    paddingTop: '10vh',
  },
  bgImage: {
    backgroundImage: `url(${personalDetails})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '32vw',
    color: 'white',
    opacity: 0.9,
  },
});

const AlmostThere = ({ prevStep, nextStep, user, handleChange }) => {
  const cityOptions = [
    {
      key: 'Benin',
      value: 'benin',
    },
    {
      key: 'Asaba',
      value: 'asaba',
    },
    {
      key: 'Lagos',
      value: 'lagos',
    },
    {
      key: 'Abuja',
      value: 'abuja',
    },
  ];

  const stateOptions = [
    {
      key: 'Edo',
      value: 'edo',
    },
    {
      key: 'Delta',
      value: 'delta',
    },
    {
      key: 'Lagos',
      value: 'lagos',
    },
    {
      key: 'Ondo',
      value: 'ondo',
    },
  ];

  const countryOptions = [
    {
      key: 'Nigeria',
      value: 'Nigeria',
    },
    {
      key: 'Usa',
      value: 'Usa',
    },
    {
      key: 'Ghana',
      value: 'Ghana',
    },
    {
      key: 'Canada',
      value: 'Canada',
    },
  ];

  const initialValues = { ...user };
  const classes = useStyles();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalDetailsScema = object({
    phone: string()
      .matches(phoneRegExp, 'Please enter valid phone number')
      .required('Phone is required'),
    city: string().required('Required'),
    state: string().required('Required'),
    country: string().required('Required'),
  });

  const handleBack = () => {
    prevStep();
  };

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
            <Box className={classes.backBtn}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item container sm={8}>
            <Grid xs={10}>
              <h1>Almost there</h1>
              <p>Now we need some more information about you</p>
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
                          type='text'
                          name='phone'
                          label='Phone'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box my={2}>
                        <FormikControl
                          control='select'
                          type='text'
                          name='city'
                          options={cityOptions}
                          label='City'
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box my={2}>
                        <FormikControl
                          control='select'
                          type='text'
                          name='state'
                          options={stateOptions}
                          label='State'
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box my={2}>
                        <FormikControl
                          control='select'
                          options={countryOptions}
                          type='text'
                          name='country'
                          label='Country/Region'
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
                        Continue
                      </Button>
                    </Grid>
                    <Grid item sm={12}>
                      <Divider />
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
              Quickly send quotations with <br></br>{' '}
              <span className='strong'> min.ng</span>
            </h3>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

AlmostThere.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,

  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
  }),
};
export default AlmostThere;
