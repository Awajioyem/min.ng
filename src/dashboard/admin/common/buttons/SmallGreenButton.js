import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, #6DAB00 34.8%, #619603 100.11%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    marginRight: '10px',
    marginLeft: '10px',
    minWidth: '50px',
    height: '30px',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '12px',
  },
});

const SmallGreenButton = ({ children, ...others }) => {
  const classes = useStyles();

  return (
    <Button
      {...others}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {children}
    </Button>
  );
};

export default SmallGreenButton;
