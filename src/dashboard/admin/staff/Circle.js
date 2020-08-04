import React from 'react';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  size: {
    color: '#76ff03',
    fontSize: 180,
  },
});
const Circle = () => {
  const classes = useStyles();
  const style = {
    display: 'flex',
    border: '15px solid #357a38',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={style}>
      <CheckCircleRoundedIcon className={classes.size} />
    </div>
  );
};

export default Circle;
