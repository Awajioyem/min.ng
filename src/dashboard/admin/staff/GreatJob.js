import React from 'react';
import {
  Paper,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core';
import Circle from './Circle';

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
}));
const GreatJob = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box style={{ width: '100%' }}>
            <Circle />

            <Typography
              variant='h6'
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '4px',
              }}
            >
              Great Job!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Paper>
  );
};

export default GreatJob;
{
  /* <Grid container>
  <Grid item xs={2}></Grid>
  <Grid item container xs={8}>
    <div style={{ margin: '0, auto' }}>
      <Typography variant='h4'>Great Job</Typography>
      <Typography variant='p'>
        You have Successfully added a new staff. Go to dashboard to view your
        staff
      </Typography>
    </div>

    <Grid item xs={12}>
      <Button fullWidth color='primary'>
        Back to dashboard
      </Button>
    </Grid>
  </Grid>
  <Grid item xs={2}></Grid>
</Grid>; */
}
