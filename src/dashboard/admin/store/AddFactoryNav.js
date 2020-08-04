import React, { useEffect, Fragment } from 'react';
import { lightGreen, green } from '@material-ui/core/colors';
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

import FactoryInformation from './FactoryInformation';
import ProductionCertificate from './ProductionCertificate';
import Trademark from './TradeMark';
import TradeAssociation from './TradeAssociation';
import ProgressBar from '../common/ProgressBar';
import ProductionCapacity from './ProductionCapacity';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#256C34',
  },
  paper: {
    padding: theme.spacing(4),
    marginTop: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    //color: theme.palette.getContrastText(lightGreen[500]),
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

const AddFactoryNav = () => {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(10);

  const [value, setActive] = React.useState(0);

  ///DANNY SEE HERE
  const [tabsList, setTabs] = React.useState([
    {
      label: 'Factory Information',
      active: true, // activate the first one
      completed: false,
    },
    {
      label: 'Product Certificate',
      active: false,
      completed: false,
    },
    {
      label: 'Trademark',
      active: false,
      completed: false,
    },
    {
      label: 'Trade Association',
      active: false,
      completed: false,
    }
  ])

  /////

  console.log(value);
  const handleChange = (event, newValue, completed = false) => {
    console.log('New tab value', newValue)
    setTabs(
      [...tabsList].map((item, i) => {
        item['active'] = i == newValue;
        item['completed'] = completed;
        return item;
      })
    )
    setActive(newValue);
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant='h5' className={classes.heading}>
          Let's setup your store
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position='static'>

            {/* DANNY SEE HERE */}
            <Tabs value={value} onChange={handleChange}>

              {tabsList.map((listItem, index) => {
                return (
                  // I feel that you should switch the styles for active and completed. Active should be the thick green incomplete tabs are disabled
                  // Add this:  disabled={!listItem.completed}
                  <Tab key={index} label={listItem.label} className={listItem.active ? classes.tabCompleted : classes.tabActive} />
                )
              })}
              {/* <Tab label='Factory Information' />
              <Tab label='Product Certificate' />
              <Tab label='Trademark' />
              <Tab label='Trade Association' /> */}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <FactoryInformation activateProductTab={(event) => {
              handleChange(event,1, true)
            }} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductionCertificate activateTrademarkTab={(event) => {
              handleChange(event, 2, true)
            }} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Trademark activateTradeAssociationTab={(event) => {
              handleChange(event, 3, true)
            }} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TradeAssociation />
          </TabPanel>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position='static' className={classes.appbar}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label={`Company's Profile`} className={classes.tabCompleted} />
              <Tab label='Production Capacity' className={classes.tabActive} />
              <Tab
                label='Licenses and Certification'
                className={classes.tabUncompleted}
              />
              <Tab label='Trade Association' className={classes.tabUncompleted} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <FactoryInformation />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductionCapacity />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProductionCertificate />
            <Trademark />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TradeAssociation />
          </TabPanel>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default AddFactoryNav;

{
  /* <Grid item container sm={6}>
            <Grid item xs={12}>
              
            </Grid>
          </Grid> */
}
