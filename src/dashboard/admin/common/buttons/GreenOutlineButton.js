import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    borderRadius: 4,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
    border: 0,
    color: 'green',
    border: '1px solid #6DAB00',
    height: 48,
    padding: '0 40px',
    width: '100%',
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '16px',
    color: 'primary',
  },
});

const GreenOutlineButton = ({ children, ...others }) => {
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

export default GreenOutlineButton;
