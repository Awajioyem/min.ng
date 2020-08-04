import React, { useState, useEffect } from 'react';
import { lightGreen, orange } from '@material-ui/core/colors';
import clsx from 'clsx';
import TabPanel from '../common/TabPanel';
import {
  Grid,
  Paper,
  makeStyles,
  Button,
  Typography,
  Container,
  Box,
  LinearProgress,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import StaffDetails from './StaffDetails';
import RolesAssigment from './RolesAssignment';
import ProgressBar from '../common/ProgressBar';
import Privileges from './Privileges';
import RoleDetails from './RoleDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(4),
    margin: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#256C34',
  },
  personalDetails: {
    borderBottom: '1px solid grey',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '97%',
    padding: theme.spacing(1),
  },
  paragraph: {
    textAlign: 'left',
  },
  addStaffHeader: {
    padding: theme.spacing(2),
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
  large: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: lightGreen[500],
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    color: '#6DAB00',
    borderRadius: '4px',
  },

  tabIsActive: {
    backgroundColor: '#6DAB00',
    color: '#FFFFFF',
  },
  tabIsNotActive: {
    backgroundColor: '#FFFFFF',
    color: '#256C34',
  },
  tabIsSubmitted: {
    backgroundColor: '#256C34',
    color: '#FFFFFF',
  },
  tabIsNotSubmitted: {
    backgroundColor: '',
  },
}));
const CreateRoles = () => {
  // const [isDisabled, setIsDisabled] = useState(true);

  const [step, setStep] = useState(1);

  const [tabOneState, setTabOneState] = useState({
    isActive: true,
    isSubmitted: false,
    isDisabled: true,
  });

  const [tabTwoState, setTabTwoState] = useState({
    isActive: true,
    isSubmitted: false,
    isDisabled: true,
  });

  const updateStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // NOTE
  const updateSubmit = (index) => {
    console.log('Index', index);
    if (index === 0) {
      setTabOneState({
        ...tabOneState,
        isSubmitted: true,
      });
    }
    if (index === 1) {
      setTabTwoState({
        ...tabTwoState,
        isSubmitted: true,
      });
    }
  };

  const classes = useStyles();

  const [progress, setProgress] = useState(10);

  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // if (step === value + 1 && tabState.isSubmitted === false) {
    //   setTabState({
    //     ...tabState,
    //   });
    // }
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant='h5' className={classes.heading}>
          Branch Setup
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <div className={classes.root}>
          <ProgressBar value={progress} />
        </div>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Box my={2}>
            <AppBar position='static' className={classes.appbar}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant='fullWidth'
                selectionFollowsFocus={true}
              >
                <Tab
                  label='Role Details'
                  className={clsx(
                    tabOneState.isSubmitted
                      ? classes.tabIsSubmitted
                      : classes.tabIsNotSubmitted,
                    step === 1 ? classes.tabIsActive : classes.tabIsNotActive
                  )}
                  value={0}
                  disabled={step !== 1 && !tabOneState.isSubmitted}
                />
                <Tab
                  label='Privileges'
                  value={1}
                  className={clsx(
                    tabTwoState.isSubmitted
                      ? classes.tabIsSubmitted
                      : classes.tabIsNotSubmitted,
                    step === 2 ? classes.tabIsActive : classes.tabIsNotActive
                  )}
                  disabled={step !== 2 && !tabOneState.isSubmitted}
                />
              </Tabs>
            </AppBar>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={0}>
            <RoleDetails
              value={value}
              index={0}
              updateSubmit={updateSubmit}
              updateStep={updateStep}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Privileges
              value={value}
              index={1}
              updateSubmit={updateSubmit}
              updateStep={updateStep}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Congrats
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateRoles;
