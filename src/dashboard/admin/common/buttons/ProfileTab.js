import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    indicator: {
        backgroundColor: '#69A401',
        color:'white'
      },
    panel:{
        backgroundColor:'#00000000',
        boxShadow:'none'
    },

    tab:{
        border:'none',
        borderBottom:'3px solid #69A401',
        color:'#69A401',
        fontWeight:'700',
        

    }
  }));
  
  const ally= (index)=>{
    return {
        id:`simple-tabpanel-${index}`,
        'aria-labelledby':`simple-tab-${index}`,
      };

  }
  
  const aria= ()=>{
    return {
        'aria-label':"simple tabs example"
      };

  }

const TabPanel = (props)=>{
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...ally(index)}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  

  const a11yProps= (index)=>{
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };

  }
const ProfileTab = () => {

    const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar className={classes.panel} position="static">
        <Tabs classes={{ indicator: classes.indicator }} value={value} onChange={handleChange} {...aria()}>
          <Tab className={classes.tab} label="Company's Profile One" {...a11yProps(0)} />
          <Tab label="Production Capacity" {...a11yProps(1)} />
          <Tab label="Licenses and Certification" {...a11yProps(2)} />
          <Tab label="Trade Association" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );

}

export default ProfileTab;