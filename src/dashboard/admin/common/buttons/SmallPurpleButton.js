import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: '#2E008E',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 40px',
    width: '50px',
    height: '30px',
    marginRight: '10px',
    marginLeft: '10px',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '12px',
  },
});

const SmallPurpleButton = ({ children, ...others }) => {
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

export default SmallPurpleButton;
