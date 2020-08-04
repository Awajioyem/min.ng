import React, { useState } from 'react';

import {
  Grid,
  Paper,
  makeStyles,
  Button,
  Typography,
  Divider,
  TextField,
  FormGroup,
  Box,
  Avatar,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import RolesAssignment from './RolesAssignment';
import NewStaffHeader from './NewStaffHeader';
import TellUsAbout from './TellUsAbout';
import { lightGreen } from '@material-ui/core/colors';
import GreenButton from '../common/buttons/GreenButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    borderBottom: '1px solid grey',
    marginBottom: 0,

    padding: theme.spacing(2),
  },

  header: {
    borderBottom: '1px solid grey',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(2),
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 14,
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    fontSize: 14,
    backgroundColor: lightGreen[500],
  },
}));

const StaffDetails = ({ updateSubmit, index, updateStep }) => {
  const classes = useStyles();

  const initialValues = { email: '', firstname: '', lastname: '', phone: '' };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalDetailsScema = object({
    firstname: string().required('First name is required').min(2).max(20),
    lastname: string().required('Last name is required').min(2).max(20),
    email: string().email().required('Email is required'),
    phone: string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone is required'),
  });

  const handleSubmit = (values, formikHelpers) => {
    // TODO ==> Handle Call to database
    updateStep();
    updateSubmit(index);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Submitted');
        resolve();
      }, 3000);
    });
  };

  return (
    <Grid container>
      <Grid item container xs={12}>
        <Paper className={classes.header}>
          <Typography variant='h5'>Staff Details</Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Avatar className={classes.large}>1</Avatar>
            <Avatar className={classes.small}>2</Avatar>
          </div>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TellUsAbout description='Tell us a little about this staff' />
            </Grid>
            <Grid item xs={9}>
              <Formik
                initialValues={initialValues}
                validationSchema={personalDetailsScema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, isSubmitting }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormGroup>
                            <Field
                              type='text'
                              name='firstname'
                              variant='outlined'
                              as={TextField}
                              label='First Name'
                              autoComplete='off'
                            />
                            <ErrorMessage name='firstname' />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormGroup>
                            <Field
                              type='text'
                              variant='outlined'
                              name='lastname'
                              as={TextField}
                              label='Last Name'
                              autoComplete='off'
                            />
                            <ErrorMessage name='lastname' />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box my={2}>
                          <FormGroup>
                            <Field
                              type='email'
                              variant='outlined'
                              name='email'
                              as={TextField}
                              label='Email'
                              autoComplete='off'
                            />
                            <ErrorMessage name='email' />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box my={2}>
                          <FormGroup>
                            <Field
                              type='text'
                              variant='outlined'
                              name='phone'
                              as={TextField}
                              label='phone'
                              autoComplete='off'
                            />
                            <ErrorMessage name='phone' />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <GreenButton
                          color={'primary'}
                          variant='contained'
                          fullWidth
                          type='submit'
                          disabled={isSubmitting}
                        >
                          Save and Continue
                        </GreenButton>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StaffDetails;
