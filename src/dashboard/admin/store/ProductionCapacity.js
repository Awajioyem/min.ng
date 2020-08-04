import React from 'react';
import FactoryHeader from './FactoryHeader';
import {
  Grid,
  Paper,
  makeStyles,
  Button,
  Typography,
  FormControl,
  MenuItem,
  TextField,
  FormGroup,
  Box,
  Avatar,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
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

const ProductionCapacity = () => {
  const classes = useStyles();
  const initialValues = {
    size: '',
    productionLines: '',
    annualOutput: '',
    country: '',
  };
  const roleDetailsScema = object({
    size: string().required('Size is required'),
    productionLines: string().required(
      'Number of production lines is required'
    ),
    annualOutput: string().required('Anual Output is required'),
    country: string().required('Please select your country'),
  });

  const handleSubmit = (values, formikHelpers) => {
    // TODO ==> Handle Call to database
    console.log(values);
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
          <Typography variant='h5'>Factory Information</Typography>

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
              <Typography variant='p'>
                Tell us more about your factory
              </Typography>
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
                          <FormControl fullWidth>
                            <Field
                              type='text'
                              name='size'
                              variant='outlined'
                              as={TextField}
                              select
                              label='Select factory size in square meters'
                              autoComplete='off'
                            >
                              {/* Todo Create a list and map through to return a item */}
                              <MenuItem value='50,100'>50-100</MenuItem>
                              <MenuItem value='100,200'>100-200</MenuItem>
                              <MenuItem value='200,300'>200-300</MenuItem>
                            </Field>
                            <ErrorMessage name='size' />
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormControl fullWidth>
                            <Field
                              type='text'
                              name='productionLines'
                              variant='outlined'
                              as={TextField}
                              select
                              label='Number of production lines'
                              autoComplete='off'
                            >
                              {/* Todo Create a list and map through to return a item */}
                              <MenuItem value='1,10'>1-10</MenuItem>
                              <MenuItem value='10,20'>10-20</MenuItem>
                              <MenuItem value='20,30'>20-30</MenuItem>
                              <MenuItem value='30,40'>30-40</MenuItem>
                            </Field>
                            <ErrorMessage name='productionLines' />
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box my={2}>
                          <FormControl fullWidth>
                            <Field
                              type='text'
                              name='annualOutput'
                              variant='outlined'
                              as={TextField}
                              select
                              label='Annual output value'
                              autoComplete='off'
                            >
                              {/* Todo Create a list and map through to return a item */}
                              <MenuItem value='1,10'>1-10</MenuItem>
                              <MenuItem value='10,20'>10-20</MenuItem>
                              <MenuItem value='20,30'>20-30</MenuItem>
                              <MenuItem value='30,40'>30-40</MenuItem>
                            </Field>
                            <ErrorMessage name='annualOutput' />
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}></Grid>

                      <Grid item xs={12}>
                        <Box my={2}>
                          <FormControl fullWidth>
                            <Field
                              type='text'
                              name='country'
                              variant='outlined'
                              as={TextField}
                              select
                              label='Factory Country/Region'
                              autoComplete='off'
                            >
                              {/* Todo Create a list and map through to return a item */}
                              <MenuItem value='nigeria'>Nigeria</MenuItem>
                              <MenuItem value='cameroon'>Cameroon</MenuItem>
                              <MenuItem value='ghana'>Ghana</MenuItem>
                              <MenuItem value='uk'>United Kingdon</MenuItem>
                            </Field>
                            <ErrorMessage name='country' />
                          </FormControl>
                        </Box>
                      </Grid>

                      <Grid item xs={12}>
                        <GreenButton
                          color={'secondary'}
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

export default ProductionCapacity;
