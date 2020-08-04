import React from 'react';
import AddNewStaffNav from './AddNewStaffNav';
import { Grid } from '@material-ui/core';

const AddNewStaff = () => {
  return (
    <Grid container spacing={2} xs={12}>
      <AddNewStaffNav />
    </Grid>
  );
};

export default AddNewStaff;
