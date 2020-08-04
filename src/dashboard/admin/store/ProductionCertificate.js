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
  FormGroup,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Card,
  CardActionArea,
  CardMedia,
  InputLabel,
  FilledInput,
  Select,
  Avatar,
  Divider,
} from '@material-ui/core';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
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

const ProductionCertificate = () => {
  const classes = useStyles();
  const [certification, setCertification] = useState({
    isCertified: 'no',
    certName: '',
    issuedBy: '',
    scope: '',
  });

  const { isCertified, certName, issuedBy, scope } = certification;
  console.log(certification);
  const onChange = (event) => {
    setCertification({ [event.target.name]: event.target.value });
  };

  return (
    <Grid container>
      <Grid item container xs={12}>
        <Paper className={classes.header}>
          <Typography variant='h5'>Production Certificate</Typography>

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
                Do you have a production certificate?
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <form>
                <Grid item container spacing={2}>
                  <Grid item xs={12}>
                    <Box my={2}>
                      <FormControl component='fieldset'>
                        <RadioGroup
                          aria-label='gender'
                          name='isCertified'
                          value={isCertified}
                          onChange={onChange}
                        >
                          <FormControlLabel
                            value='yes'
                            control={<Radio />}
                            label='Yes'
                          />
                          <FormControlLabel
                            value='no'
                            control={<Radio />}
                            label='No'
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
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
                        Upload and image of your <br></br> certification
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
                        id='cert'
                        variant='outlined'
                        label='Certificate Name'
                        name='certName'
                        value={certName}
                        onChange={onChange}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <TextField
                        type='text'
                        label='Business Scope'
                        variant='outlined'
                        fullWidth
                        select
                        value={scope}
                        onChange={onChange}
                        name='scope'
                      >
                        <MenuItem value='scope'>Scope</MenuItem>
                        <MenuItem value='scope'>Scope</MenuItem>
                        <MenuItem value='scope'>Scope</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        label='Issued By'
                        variant='outlined'
                        id='issuedby'
                        name='issuedBy'
                        value={issuedBy}
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

export default ProductionCertificate;
