import React, { useState, Fragment } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import TabIcon from '@material-ui/icons/Tab';
import EventIcon from '@material-ui/icons/Event';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    // maxWidth: 345,
    // minWidth: 260,
    position: 'relative',
  },
  contentRoot: {
    // maxWidth: 345,
    minWidth: '72vw',
  },
  avatar: {
    background: 'rgb(103,161,2)',
  },
}));

export const Sidebar = () => {
  const classes = useStyles();

  const [listItems, setActiveItem] = useState([
    {
      label: 'My Account',
      icon: <TabIcon />,
      url: '/dashboard/account',
    },
    {
      label: 'My Orders',
      icon: <EventIcon />,
      url: '/dashboard/orders',
    },

    {
      label: 'Messages',
      icon: <MailOutlineIcon />,
      url: '/dashboard/messages',
    },
    {
      label: 'My Inquiries',
      icon: <SettingsIcon />,
      url: '/dashboard/inquires',
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

  const activateClickedClass = (index) => {
    // the beginning of the end of react hehe
    setActiveItem(
      [...listItems].map((item, i) => {
        item['active'] = i === index;
        return item;
      })
    );
  };

  return (
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
                  <Link to={item.url}>
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
  );
};
