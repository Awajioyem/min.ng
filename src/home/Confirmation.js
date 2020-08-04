import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
import emailImg from '../assets/img/login/emailDesktop.png';
import confirmEmail from '../assets/img/login/confirmemail.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  btnOutline: {
    padding: '14px',
  },

  backBtn: {
    paddingTop: '3vh',
    paddingLeft: '10vh',
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
    backgroundImage: `url(${confirmEmail})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '32vw',
    color: 'white',
    opacity: 0.9,
  },

  emailBackground: {
    height: '200px',
    width: '250px',
    padding: 0,
    marginTop: 0,
  },

  centerImg: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Confirmation = ({ prevStep }) => {
  const classes = useStyles();

  const handleBack = () => {
    prevStep();
  };

  // Note Replace with dynamic value from props
  const email = 'test@test.com';

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
            <Grid item xs={10}>
              <h1>Confirm Email</h1>
              <p>
                We have sent a confirmation email to the email address provided
              </p>{' '}
              <h5 style={{ margin: 0 }}>{email}</h5>
            </Grid>
            <Grid xs={2}>
              <Stepper />
            </Grid>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
        <Grid item container sm={12}>
          <Grid item sm={3}></Grid>
          <Grid item container sm={7}>
            <Grid item xs={12} className={classes.centerImg}>
              <img src={emailImg} className={classes.emailBackground} />
            </Grid>
            <Grid item xs={12}>
              <Link to='/login'>
                <Button color={'primary'} variant='contained' fullWidth>
                  Login
                </Button>
              </Link>
            </Grid>
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
              Track and monitor your products with <br></br>{' '}
              <span className='strong'> min.ng</span>
            </h3>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

Confirmation.propTypes = {
  nextStep: PropTypes.func.isRequired,
};
export default Confirmation;
