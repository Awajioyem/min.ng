import React from 'react';

import {
  Grid,
  Paper,
  makeStyles,
  Button,
  FormGroup,
  Box,
  Typography,
  Avatar,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import CustomCheckBox from './CustomCheckbox';
import NewStaffHeader from './NewStaffHeader';
import { object, array, string } from 'yup';
import TellUsAbout from './TellUsAbout';
import { lightGreen } from '@material-ui/core/colors';
import GreenButton from '../common/buttons/GreenButton';
import GreenOutlineButton from '../common/buttons/GreenOutlineButton';

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

const Privileges = ({ index, updateStep, updateSubmit }) => {
  const classes = useStyles();
  const initialValues = { privileges: [] };
  const privilegesScema = object({
    privileges: array()
      .of(string())
      .required('You must select at least one previlege'),
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
          <Typography variant='h5'>privileges</Typography>

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
              <TellUsAbout description='What role will this staff be performing?' />
            </Grid>
            <Grid item xs={9}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={privilegesScema}
              >
                {({ values, errors, isSubmitting }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={4}>
                        <FormGroup>
                          <CustomCheckBox
                            name='privileges'
                            value='privilege1'
                            label='privilege1'
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <FormGroup>
                          <CustomCheckBox
                            name='privileges'
                            value='privilege2'
                            label='privilege2'
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <FormGroup>
                          <CustomCheckBox
                            name='privileges'
                            value='privilege3'
                            label='privilege3'
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12}>
                        <ErrorMessage name='privileges' />
                      </Grid>
                      <Grid item xs={12}>
                        <GreenOutlineButton
                          onClick={() => console.log('Clicked')}
                          color={'primary'}
                          variant='outline'
                          fullWidth
                          type='submit'
                          disabled={isSubmitting}
                        >
                          Save and Continue
                        </GreenOutlineButton>
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

export default Privileges;

// import React from 'react';
// import { Form, Formik, Field, ErrorMessage, useField } from 'formik';
// import { object, string } from 'yup';
// import {
//   Grid,
//   makeStyles,
//   Button,
//   TextField,
//   FormGroup,
//   Box,
//   MenuItem,
//   Divider,
//   FormControlLabel,
//   Checkbox,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },

//   btnOutlined: {
//     padding: 14,
//   },

//   divHeight: {
//     height: 50,
//     display: 'inline',
//     alignSelf: 'center',
//   },
// }));
