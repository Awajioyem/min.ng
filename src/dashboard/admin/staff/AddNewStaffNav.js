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

import ProgressBar from '../common/ProgressBar';
import Privileges from './Privileges';

const AddNewStaffNav = () => {
  const [tabCompleted, setTabCompleted] = useState({});
  const updateSubmit = () => {
    setTabCompleted({
      backgroundColor: '#256C34',
      color: 'white',
    });
  };

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
    },

    tabCompleted: tabCompleted,

    tabActive: {
      backgroundColor: '#6DAB00',
      color: 'white',
    },
    tabUncompleted: {
      backgroundColor: 'white',
      color: '#256C34',
    },
  }));
  const classes = useStyles();

  const [progress, setProgress] = useState(10);

  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  const [tabList, setTabList] = useState([
    {
      label: 'Staff Details',
      tab: <Tab />,
    },
    {
      label: 'Role Assignment',
      tab: <Tab />,
    },
    {
      label: 'Role Details',
      tab: <Tab />,
    },
    {
      label: 'Privileges',
      tab: <Tab />,
    },
  ]);

  const [tabPanelList, setTabPanelList] = useState([
    {
      label: 'Staff Details',
      tab: <Tab />,
    },
    {
      label: 'Role Assignment',
      tab: <Tab />,
    },
    {
      label: 'Role Details',
      tab: <Tab />,
    },
    {
      label: 'Privileges',
      tab: <Tab />,
    },
  ]);

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
      <Grid item xs={12}>
        <AppBar position='static' className={classes.appbar}>
          <Tabs value={value} onChange={handleChange} variant='fullWidth'>
            <Tab label='Staff Details' className={classes.tabCompleted} />
            <Tab label='Role Assignment' className={classes.tabCompleted} />
            <Tab label='Role Details' className={classes.tabActive} />
            <Tab label='Privileges' className={classes.tabUncompleted} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <StaffDetails value={value} index={0} updateSubmit={updateSubmit} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RolesAssigment value={value} index={1} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RoleDetails value={value} index={2} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Privileges value={value} index={3} />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default AddNewStaffNav;
