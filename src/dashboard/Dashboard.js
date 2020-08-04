import React, { Fragment } from 'react';
import NavHeader from './NavHeader';
import { Container, Grid, Paper, Box } from '@material-ui/core';
import { Sidebar } from './Sidebar';
import ProfileTab from './admin/common/buttons/ProfileTab';


const Dashboard = () => {
    return ( <
        Fragment >
        <
        NavHeader style = {
            { margin: 0 } }
        /> <
        Container >
        <
        Grid container spacing = { 3 } >
        <
        Grid item xs = { 3 } >
        <
        Box my = { 3 } >
        <
        Sidebar / >
        <
        /Box> <
        /Grid>

        <
        Grid item xs = { 9 } >
        <
        Box my = { 3 } > { /* <ProfileTab/> */ } { /* <Success head="Great Job!" text="You have successfully completed your factory details. Now you can continue to next stage" btn="Go to my store dashboard"/> */ } { /* <Success2 head="Great Job!" text="You have successfully completed your factory details. Now you can continue to next stage" firstbtn="Back to dashboard" secondbtn="Proceed to next step"/> */ }


        <
        Paper my = { 2 } > Content < /Paper> <
        /Box> <
        /Grid> <
        /Grid> <
        /Container> <
        /Fragment>
    );
};

export default Dashboard;