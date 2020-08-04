import React from 'react';

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
    width: '100%',
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

const RoleDetails = ({ index, updateStep, updateSubmit }) => {
  const classes = useStyles();
  const initialValues = { roleName: '', roleDescription: '' };
  const roleDetailsScema = object({
    roleName: string().required('Role is required').min(2).max(20),
    roleDescription: string()
      .required('Role description is required')
      .min(2)
      .max(20),
  });

  const handleSubmit = (values, formikHelpers) => {
    // TODO ==> Handle Call to database
    console.log(values);
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
      <Grid container item xs={12}>
        <Paper className={classes.header}>
          <Typography variant='h5'>Role Details</Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Avatar className={classes.small}>1</Avatar>
            <Avatar className={classes.large}>2</Avatar>
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
                validationSchema={roleDetailsScema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, isSubmitting }) => (
                  <Form>
                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormGroup>
                            <Field
                              type='text'
                              name='roleName'
                              variant='outlined'
                              as={TextField}
                              label='Role Name'
                              autoComplete='off'
                            />
                            <ErrorMessage name='roleName' />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={12}>
                        <Grid item xs={2}></Grid>
                        <Box my={2} width='100%'>
                          <FormGroup fullWidth>
                            <Field
                              type='text'
                              variant='outlined'
                              name='roleDescription'
                              as={TextField}
                              multiline
                              label='Role Description'
                              autoComplete='off'
                            />
                            <ErrorMessage name='roleDescription' />
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
                          Proceed
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

export default RoleDetails;
