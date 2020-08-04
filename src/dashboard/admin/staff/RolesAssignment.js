import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import NewStaffHeader from './NewStaffHeader';
import {
  Grid,
  makeStyles,
  Button,
  TextField,
  FormGroup,
  Paper,
  MenuItem,
  Divider,
  Box,
  FormControl,
  Typography,
  Avatar,
} from '@material-ui/core';
import TellUsAbout from './TellUsAbout';
import { lightGreen } from '@material-ui/core/colors';
import GreenOutlineButton from '../common/buttons/GreenOutlineButton';
import GreenButton from '../common/buttons/GreenButton';
import PurpleButton from '../common/buttons/PurpleButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },

  paper: {
    borderBottom: '1px solid grey',
    marginBottom: 0,

    width: '100%',
    padding: theme.spacing(2),
  },
  btnOutlined: {
    padding: 14,
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

const RolesAssigment = ({ index, updateSubmit, updateStep }) => {
  const classes = useStyles();

  const initialValues = { role: '' };
  const roleSchema = object({
    role: string().required('Role is required').min(2).max(100),
  });

  const handleSubmit = (values, formikHelpers) => {
    // TODO ==> Handle Call to database
    updateStep();
    updateSubmit(index);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Submitted', values);
        resolve();
      }, 3000);
    });
  };

  return (
    <Grid container>
      <Grid item container xs={12}>
        <Paper className={classes.header}>
          <Typography variant='h5'>Role Assignment</Typography>

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
              <TellUsAbout description='What role would this staff be performing?' />
            </Grid>
            <Grid item xs={9}>
              <Formik
                initialValues={initialValues}
                validationSchema={roleSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors, isSubmitting }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormControl fullWidth>
                            <Field
                              type='text'
                              name='role'
                              variant='outlined'
                              as={TextField}
                              select
                              label='Select Staff Role'
                              autoComplete='off'
                            >
                              <MenuItem value='manager'>Manager</MenuItem>
                              <MenuItem value='manager'>Manager</MenuItem>
                              <MenuItem value='manager'>Manager</MenuItem>
                            </Field>
                            <ErrorMessage name='role' />
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <PurpleButton
                            color={'secondary'}
                            variant='contained'
                            fullWidth
                            type='submit'
                          >
                            Create New Role
                          </PurpleButton>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <GreenOutlineButton
                            className={classes.btnOutlined}
                            color={'primary'}
                            variant='outlined'
                            fullWidth
                            type='submit'
                          >
                            Save and Add Another
                          </GreenOutlineButton>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <GreenButton
                            className={classes.btnOutlined}
                            color={'primary'}
                            variant='contained'
                            fullWidth
                            type='submit'
                          >
                            Save and Continue
                          </GreenButton>
                        </Box>
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

export default RolesAssigment;

{
  /* <Grid container spacing={2} xs={12}>
<Grid item container xs={12} spacing={4}>
  <Grid item xs={12} sm={6}>
    <Box my={2}>
      <FormGroup>
        <Field
          type='text'
          name='role'
          variant='outlined'
          as={TextField}
          select
          label='Select Staff Role'
          autoComplete='off'
        >
          <MenuItem value='manager'>Manager</MenuItem>
          <MenuItem value='manager'>Manager</MenuItem>
          <MenuItem value='manager'>Manager</MenuItem>
        </Field>
        <ErrorMessage name='role' />
      </FormGroup>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Button
      color={'primary'}
      variant='contained'
      fullWidth
      type='submit'
    >
      Create New Role
    </Button>
  </Grid>
</Grid>
<Grid item container xs={12} spacing={2}>
  <Grid item xs={12} sm={6}>
    <Button
      color={'primary'}
      className={classes.btnOutlined}
      variant='outlined'
      fullWidth
      type='submit'
      disabled={isSubmitting}
    >
      Save and Add Another
    </Button>
  </Grid>
  <Grid item xs={12} sm={6}>
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
</Grid>
</Grid> */
}
