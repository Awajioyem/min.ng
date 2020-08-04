import React from 'react';
import {
  Card,
  Button,
  ButtonGroup,
  makeStyles,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1, 4),
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '90%',
  },
  btn: {
    padding: theme.spacing(4),
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 0,
    alignSelf: 'left',
  },

  label: {
    display: 'flex',
    alignContent: 'space-between',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  content: {
    marginRight: theme.spacing(8),
  },
}));
const SideBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item container xs='12'>
          <Button className={classes.btn} fullWidth>
            <Typography className={classes.content} variant='subtitle1'>
              Staff Details
            </Typography>{' '}
            <CheckCircleRoundedIcon />
          </Button>
        </Grid>
        <Grid item xs='12'>
          <Button className={classes.btn} fullWidth>
            <Typography className={classes.content} variant='subtitle2'>
              Role Assignment
            </Typography>{' '}
            <CheckCircleRoundedIcon />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SideBar;
