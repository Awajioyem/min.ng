import React from 'react';
import { Paper, Typography, Avatar, makeStyles } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
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
    marginRight: theme.spacing(2),
    fontSize: 14,
  },
  large: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
    width: theme.spacing(5),
    height: theme.spacing(5),
    backgroundColor: lightGreen[500],
  },
}));
const FactoryHeader = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant='h5'>{props.title}</Typography>
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
  );
};

export default FactoryHeader;
