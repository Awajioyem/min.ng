import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, connect } from 'formik';
import { object, string } from 'yup';
import {
  Grid,
  Box,
  Button,
  makeStyles,
  Container,
  IconButton,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormikControl from '../dashboard/admin/common/formik/FormikControl';

import login from '../assets/img/login/login.png';
import { withRouter } from 'react-router-dom';

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
    backgroundImage: `url(${login})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '32vw',
    color: 'white',
    opacity: 0.9,
  },
});

const PasswordRecovery = ({ history }) => {
  const initialValues = { email: '' };
  const classes = useStyles();

  const personalDetailsScema = object({
    email: string().email('Invalid Email').required('Required'),
  });

  const handleSubmit = (values, helpers) => {
    // TODO ==> Handle Call to database

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Submitted', values);

        history.push('/login');
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
              {/* Wrap with link to login page */}
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item container sm={8}>
            <Grid xs={10}>
              <h1>Password Recovery</h1>
              <p style={{ marginBottom: '0px' }}>
                We will send a recovery password to your email
              </p>
            </Grid>
            <Grid item sm={9}>
              <Formik
                initialValues={initialValues}
                validationSchema={personalDetailsScema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, isSubmitting }) => (
                  <Form>
                    <Grid container>
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
                        <Button
                          color={'primary'}
                          variant='contained'
                          fullWidth
                          type='submit'
                          disabled={isSubmitting}
                        >
                          Reset Password
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item sm={7}></Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Grid>
      <Grid container item sm={4} className={classes.bgImage}>
        <Container>
          <Grid container spacing={2} className={classes.side}>
            <Grid item sm={8}>
              <h4>Don't have an account?</h4>
            </Grid>
            <Grid item sm={4}>
              <Button fullWidth color='primary'>
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <div style={{ minHeight: '50vh' }}></div>
          </Grid>

          <Grid item xs={12}>
            <h3 style={{ textAlign: 'center' }}>
              Manage invoices and many more with <br></br>{' '}
              <span className='strong'> min.ng</span>
            </h3>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

PasswordRecovery.propTypes = {
  values: PropTypes.shape({
    history: PropTypes.func.isRequired,
  }),
};
export default withRouter(connect(PasswordRecovery));
