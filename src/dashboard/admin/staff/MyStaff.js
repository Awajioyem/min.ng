import React, { useState, useEffect } from 'react';
import { lightGreen, orange } from '@material-ui/core/colors';
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
import RoleDetails from './RoleDetails';
import Privileges from './Privileges';
import ProgressBar from '../common/ProgressBar';
import GreenButton from '../common/buttons/GreenButton';
import ActiveStaff from './ActiveStaff';

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
    marginTop: 20,
  },

  tabCompleted: {
    backgroundColor: '#256C34',
    color: 'white',
  },

  tabActive: {
    backgroundColor: '#6DAB00',
    color: 'white',
  },
  tabUncompleted: {
    backgroundColor: 'white',
    color: '#256C34',
  },
}));

const MyStaff = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant='h5' className={classes.heading}>
          Branch Setup
        </Typography>
      </Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={3}>
        <GreenButton>Create New Staff</GreenButton>
      </Grid>
      <Grid item xs={12}>
        <AppBar position='static' className={classes.appbar}>
          <Tabs value={value} onChange={handleChange} variant='fullWidth'>
            <Tab label='Active Staff' className={classes.tabCompleted} />
            <Tab label='Pending Approval' className={classes.tabCompleted} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ActiveStaff />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h1>Pending Approval</h1>
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MyStaff;
