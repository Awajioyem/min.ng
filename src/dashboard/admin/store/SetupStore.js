import React from 'react';
import FactoryInformation from './FactoryInformation';

import { Grid, Container } from '@material-ui/core';

import AddFactoryNav from './AddFactoryNav';
import ProductionCertificate from './ProductionCertificate';
import Trademark from './TradeMark';
import TradeAssociation from './TradeAssociation';

const SetupStore = () => {
  return (
    <Grid container spacing={3} xs={12}>
      <AddFactoryNav />
    </Grid>
  );
};

export default SetupStore;
