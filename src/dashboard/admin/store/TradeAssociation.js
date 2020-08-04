import React, { useState } from 'react';
import FactoryHeader from './FactoryHeader';
import {
  Grid,
  Paper,
  makeStyles,
  Button,
  Typography,
  FormControl,
  MenuItem,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  Avatar,
  Divider,
} from '@material-ui/core';

import { object, string, number } from 'yup';
import { DateTimePicker } from '@material-ui/pickers';
import { lightGreen } from '@material-ui/core/colors';
import PurpleButton from '../common/buttons/PurpleButton';
import GreenOutlineButton from '../common/buttons/GreenOutlineButton';
import GreenButton from '../common/buttons/GreenButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100,
  },
  media: {
    height: 120,
  },

  paper: {
    borderBottom: '1px solid grey',
    marginBottom: 0,
    width: '100%',
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(2),
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 14,
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    fontSize: 14,
    backgroundColor: lightGreen[500],
  },
}));

const TradeAssociation = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);

    setTradeAssociation({
      ...tradeAssociation,
      date: date,
    });
  };
  const [tradeAssociation, setTradeAssociation] = useState({
    name: '',
    membershipNumber: '',
    membershipType: '',
    date: '',
  });

  const { name, membershipNumber, membershipType, date } = tradeAssociation;
  console.log(tradeAssociation);
  const onChange = (event) => {
    console.log(event);
    setTradeAssociation({ [event.target.name]: event.target.value });
  };

  return (
    <Grid container>
      <Grid item container xs={12}>
        <Paper className={classes.header}>
          <Typography variant='h5'>Trade Association</Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Avatar className={classes.small}>1</Avatar>
            <Avatar className={classes.large}>2</Avatar>
          </div>
        </Paper>
        <Divider />
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant='p'>
                Do you belong to a trade association?
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <form onSubmit={(e) => e.preventDefault()}>
                <Grid item container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        type='text'
                        label='Select Association'
                        variant='outlined'
                        fullWidth
                        select
                        value={tradeAssociation}
                        onChange={onChange}
                        name='tradeAssociation'
                      >
                        <MenuItem value='tradeAssociation'>
                          TradeAssociation
                        </MenuItem>
                        <MenuItem value='tradeAssociation'>
                          TradeAssociation
                        </MenuItem>
                        <MenuItem value='tradeAssociation'>
                          TradeAssociation
                        </MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid item container spacing={2} xs={12}>
                    <Grid item xs={6}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image='/static/images/cards/contemplative-reptile.jpg'
                            title='Contemplative Reptile'
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <p>
                        Upload an image of your <br></br> membership certificate
                      </p>
                      <PurpleButton
                        variant='contained'
                        color='secondary'
                        component='label'
                        fullWidth
                      >
                        Select File
                        <input type='file' style={{ display: 'none' }} />
                      </PurpleButton>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        variant='outlined'
                        label='Membership Number'
                        name='membershipNumber'
                        value={membershipNumber}
                        onChange={onChange}
                      />
                    </FormControl>
                  </Grid>
                  {/* DATE PICKER */}
                  <Grid item xs={6}>
                    {/* <FormControl fullWidth>
                      <DateTimePicker
                        label='DateTimePicker'
                        inputVariant='outlined'
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </FormControl> */}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        label='Membership Type'
                        variant='outlined'
                        name='membershipType'
                        value={membershipType}
                        onChange={onChange}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <GreenOutlineButton
                      color={'primary'}
                      variant='contained'
                      fullWidth
                      type='submit'
                    >
                      Save and Add Another
                    </GreenOutlineButton>
                  </Grid>

                  <Grid item xs={6}>
                    <GreenButton
                      color={'primary'}
                      variant='contained'
                      fullWidth
                      type='submit'
                    >
                      Save and Continue
                    </GreenButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TradeAssociation;
