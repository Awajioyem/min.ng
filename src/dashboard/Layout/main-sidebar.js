import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Box,
  Card,
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Avatar,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import TabIcon from '@material-ui/icons/Tab';
import EventIcon from '@material-ui/icons/Event';
import secondImage from '../../assets/img/step2.jpg';
import AddNewStaffNav from '../admin/staff/AddNewStaffNav';
import AddFactoryNav from '../admin/store/AddFactoryNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Privileges from '../admin/staff/Privileges';
import SetupStore from '../admin/store/SetupStore';
import AddNewStaff from '../admin/staff/AddNewStaff';
import MyStaff from '../admin/staff/MyStaff';
import BranchSetup from '../admin/staff/BranchSetup';
import CreateRoles from '../admin/staff/CreateRoles';

const drawerWidth = 240;
const preventDefault = (event) => {
  event.preventDefault();
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },

  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    padding: 20,
  },
  sideRoot: {
    maxWidth: 345,
    // minWidth: 260,
  },
  contentRoot: {
    // maxWidth: 345,
    minWidth: '72vw',
  },
  avatar: {
    background: 'rgb(103,161,2)',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let match = useRouteMatch();

  const [listItems, setActiveItem] = React.useState([
    {
      label: 'My Account',
      icon: <TabIcon />,
      url: '/dashboard/create-store',
    },
    {
      label: 'My Orders',
      icon: <EventIcon />,
      url: '/dashboard/create-staff',
    },
    {
      label: 'Messages',
      icon: <MailOutlineIcon />,
      url: '/dashboard/privileges',
    },
    {
      label: 'My Inquiries',
      icon: <SettingsIcon />,
      url: '/dashboard/inquiries',
    },
    {
      label: "My RFQ's",
      icon: <SettingsIcon />,
      url: '/dashboard/rfqs',
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      url: '/dashboard/settings',
    },
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, []);

  const activateClickedClass = (index) => {
    // the beginning of the end of react hehe
    setActiveItem(
      [...listItems].map((item, i) => {
        item['active'] = i == index;
        return item;
      })
    );
  };

  return (
    <div className={classes.root}>
      <Router>
        <Box mt={4} ml={4}>
          <Grid spacing={2} container>
            {/* <Grid item xs={1} sm={1}></Grid> */}
            <Grid item xs={3}>
              <Card className={classes.sideRoot}>
                <CardActionArea>
                  <CardHeader
                    avatar={
                      <Avatar aria-label='recipe' className={classes.avatar}>
                        AA
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label='settings'>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title='Abidemi A.'
                    subheader='Upload Photo'
                  />
                  {/* <Divider light /> */}

                  <CardContent>
                    <List
                      component='nav'
                      className={classes.listRoot}
                      aria-label='contacts'
                    >
                      {listItems.map((item, index) => {
                        return (
                          <Fragment key={index}>
                            <Link to={`${item.url}`}>
                              <ListItem
                                button
                                onClick={() => {
                                  activateClickedClass(index);
                                }}
                                className={classes.listItem}
                                style={{
                                  backgroundColor: item.active
                                    ? 'rgb(103,161,2)'
                                    : '#ffffff',
                                  color: item.active ? '#ffffff' : 'rgb(0,0,0)',
                                }}
                              >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                              </ListItem>
                              <Divider variant='inset' component='li' />
                            </Link>
                          </Fragment>
                        );
                      })}
                    </List>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <Card className={classes.contentRoot}>
                <CardActionArea>
                  <CardContent>
                    <Switch>
                      <Route path='/dashboard/privileges'>
                        <Privileges />
                      </Route>
                      <Route path='/dashboard/create-store'>
                        <SetupStore />
                      </Route>
                      <Route path='/dashboard/create-staff'>
                        <AddNewStaff />
                      </Route>
                      <Route path='/dashboard/my-staff'>
                        <MyStaff />
                      </Route>
                    </Switch>

                    {/* <Box my={4}>
                    <AddNewStaffNav />
                  </Box>
                  <Box my={4}>
                    <AddFactoryNav />
                  </Box> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </div>
  );
}
