import React, { Component, Fragment } from 'react';
import background from '../assets/img/background1.png';
import {
  makeStyles,
  useTheme,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  Button,
  CssBaseline,
  Typography,
  Container,
  Box,
  FormLabel,
  RadioGroup,
  Radio,
  Paper,
  FormControlLabel,
  Divider,
  TextField,
} from '@material-ui/core';

import firstImage from '../assets/img/step1.jpg';
import secondImage from '../assets/img/step2.jpg';
import thirdImage from '../assets/img/step3.jpg';

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import LinearStepper from '../components/stepper';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppDashboard from '../dashboard/layout//main-sidebar';
import UserRegistration from './UserRegistration';

/**
 * Import Style
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    height: '100%',
    // width: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const GetStartedComponent = () => {
  const [spacing, setSpacing] = React.useState(2);
  const [activeView, setActiveView] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const styles = {
    rightContainer: {
      backgroundImage: `url(${firstImage})`,
      backgroundSize: 'cover',
      height: '97vh',
      width: '32vw',
      color: 'white',
    },

    secondRightContainer: {
      backgroundImage: `url(${secondImage})`,
      backgroundSize: 'cover',
      height: '97vh',
      width: '32vw',
      color: 'white',
    },

    thirdRightContainer: {
      backgroundImage: `url(${thirdImage})`,
      backgroundSize: 'cover',
      height: '97vh',
      width: '32vw',
      color: 'white',
    },
  };

  const saveGetStarted = () => {
    // Do something, then

    setActiveView(2);
  };

  const saveAlmostThere = () => {
    // Do something, then

    setActiveView(3);
  };

  const gotoMailBox = () => {
    // Do something, then

    setActiveView(4);
  };

  const login = () => {
    // Do something, then

    return (
      <Router>
        <Route path='/dashboard/create-staff' />
        <AppDashboard />
      </Router>
    );
    // setActiveView(4);
  };

  const letsStart = () => {
    return (
      <Fragment>
        <UserRegistration />

        <Grid spacing={0} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Box m={5}>
              <Grid container>
                <Grid item xs={12}>
                  <h1>Let's get started</h1>
                  <p>First we need you to provide your email and password</p>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={1}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete='off'
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box mt={2}>
                            <TextField
                              className='form-control'
                              label='Email'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box mt={5}>
                            <TextField
                              className='form-control'
                              label='Password'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <TextField
                              className='form-control'
                              label='Confirm Password'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <Button
                              variant='contained'
                              className='c-btn c-btn-success'
                              disableElevation
                              onClick={() => saveGetStarted()}
                            >
                              Continue
                            </Button>
                          </Box>
                        </Grid>

                        {/* <Grid item xs={12}>
                                    <hr />
                                </Grid> */}

                        <Grid item xs={12}>
                          <Box mt={3}>
                            <Grid container justify='space-between'>
                              <Grid item xs={6}>
                                <Button
                                  variant='contained'
                                  className='c-btn-lg'
                                  disableElevation
                                >
                                  USE GMAIL
                                </Button>
                              </Grid>
                              <Grid item xs={6}>
                                <Box ml={6}>
                                  <Button
                                    variant='contained'
                                    className='c-btn-lg'
                                    disableElevation
                                  >
                                    USE FACEBOOK
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={4} style={styles.rightContainer}>
            <Container>
              <Grid
                container
                direction='column'
                alignContent='center'
                spacing={6}
              >
                <Grid item xs={12}>
                  <Box mt={6}>
                    <Grid container spacing={5}>
                      <Grid item xs={10}>
                        Already have an account?
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant='contained'
                          color='default'
                          disableElevation
                        >
                          login{' '}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ minHeight: '50vh' }}></div>
                </Grid>

                <Grid item xs={12}>
                  <h2>
                    Track and Manage Sales with <br></br> <b> min.ng</b>
                  </h2>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  const almostThere = () => {
    return (
      <Fragment>
        <Grid spacing={0} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Box m={5}>
              <Grid container>
                <Grid item xs={12}>
                  <h1>Almost there</h1>
                  <p>Now we need more information about you</p>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={1}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete='off'
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box mt={2}>
                            <TextField
                              className='form-control'
                              label='Phone Number'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box mt={5}>
                            <Grid spacing={2} container>
                              <Grid item xs={6}>
                                <TextField
                                  label='Your  City'
                                  variant='outlined'
                                />
                              </Grid>

                              <Grid item xs={6}>
                                <TextField
                                  label='Your State'
                                  variant='outlined'
                                />
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <TextField
                              className='form-control'
                              label='Your Country/Region'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <Button
                              variant='contained'
                              className='c-btn c-btn-success'
                              disableElevation
                              onClick={() => saveAlmostThere()}
                            >
                              Continue
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={4} style={styles.secondRightContainer}>
            <Container>
              <Grid
                container
                direction='column'
                alignContent='center'
                spacing={6}
              >
                <Grid item xs={12}>
                  <Box mt={6}>
                    <Grid container spacing={5}>
                      <Grid item xs={10}>
                        Already have an account?
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant='contained'
                          color='default'
                          disableElevation
                        >
                          login{' '}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ minHeight: '50vh' }}></div>
                </Grid>

                <Grid item xs={12}>
                  <h2>
                    Quickly send quotations with <br></br> <b> min.ng</b>
                  </h2>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  const confirmEmail = () => {
    return (
      <Fragment>
        <Grid spacing={0} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Box m={5}>
              <Grid container>
                <Grid item xs={12}>
                  <h1>Confirm email</h1>
                  <p>We have sent a confirmation mail to the email provided</p>
                  <b>idrisbass12345@gmail.com</b>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={1}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete='off'
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box mt={5}>
                            {/* <img src={desktopConfirmation} /> */}
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <Button
                              variant='contained'
                              className='c-btn c-btn-success'
                              disableElevation
                              onClick={() => gotoMailBox()}
                            >
                              Go to your mailbox
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={4} style={styles.thirdRightContainer}>
            <Container>
              <Grid
                container
                direction='column'
                alignContent='center'
                spacing={6}
              >
                <Grid item xs={12}>
                  <Box mt={6}>
                    <Grid container spacing={5}>
                      <Grid item xs={10}>
                        Already have an account?
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant='contained'
                          color='default'
                          disableElevation
                        >
                          login{' '}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ minHeight: '50vh' }}></div>
                </Grid>

                <Grid item xs={12}>
                  <h2>
                    Track and monitor products with <br></br> <b> min.ng</b>
                  </h2>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  const welcomeBack = () => {
    return (
      <Fragment>
        <Grid spacing={0} container>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Box m={5}>
              <Grid container>
                <Grid item xs={12}>
                  <h1>Welcome back</h1>
                  <p>First we neead you to provide your email and password</p>
                </Grid>

                <Grid item xs={12}>
                  <Box mt={1}>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete='off'
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box mt={2}>
                            <TextField
                              className='form-control'
                              label='Email'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <TextField
                              className='form-control'
                              label='Password'
                              variant='outlined'
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={5}>
                            <Button
                              variant='contained'
                              className='c-btn c-btn-success'
                              disableElevation
                              onClick={login}
                            >
                              Login
                            </Button>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={3}>
                            <Grid container justify='space-between'>
                              <Grid item xs={6}>
                                <Typography>Keep me signed in</Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography>Forgot password</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box mt={3}>
                            <Grid container justify='space-between'>
                              <Grid item xs={6}>
                                <Button
                                  variant='contained'
                                  className='c-btn-lg'
                                  disableElevation
                                >
                                  USE GMAIL
                                </Button>
                              </Grid>
                              <Grid item xs={6}>
                                <Box ml={6}>
                                  <Button
                                    variant='contained'
                                    className='c-btn-lg'
                                    disableElevation
                                  >
                                    USE FACEBOOK
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={4} style={styles.secondRightContainer}>
            <Container>
              <Grid
                container
                direction='column'
                alignContent='center'
                spacing={6}
              >
                <Grid item xs={12}>
                  <Box mt={6}>
                    <Grid container spacing={5}>
                      <Grid item xs={10}>
                        Want to join made in Nigeria?
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant='contained'
                          color='default'
                          disableElevation
                        >
                          Register{' '}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ minHeight: '50vh' }}></div>
                </Grid>

                <Grid item xs={12}>
                  <h2>
                    Manage invoices and many more with <br></br> <b> min.ng</b>
                  </h2>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Fragment>
    );
  };

  let view;
  switch (activeView.toString()) {
    case '1':
      view = letsStart;
      break;
    case '2':
      view = almostThere;
      break;
    case '3':
      view = confirmEmail;
      break;
    case '4':
      view = welcomeBack;
    default:
      view = welcomeBack;
      break;
  }

  return <div className={classes.paper}>{view() || null}</div>;
};

export default GetStartedComponent;
