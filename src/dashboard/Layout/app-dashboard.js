import React, { Component, Fragment } from 'react';
import DashboardHeader from './main-header';
import DashboardSidebar from './main-sidebar';




export default function AppDashboard() {

    return (
        <Fragment>
            <DashboardHeader />
            <DashboardSidebar />
        </Fragment>

    );

}