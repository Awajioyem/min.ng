import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import Birthday from './BirthdayTextField';

const useStyles = makeStyles(() => ({
  label: { marginBottom: 8 },
  day: {
    width: 56,
  },
  month: {
    width: 56,
  },
  year: {
    width: 72,
  },
}));

const BirthdayTextField = () => {
  const [value, setValue] = React.useState('');
  const styles = useStyles();

  return (
    <Box pl={{ xs: 2, sm: 4 }}>
      <Typography color={'textSecondary'}>value : {value}</Typography>
      <FormHelperText>ISO 8601</FormHelperText>
      <br />
      <Birthday label={'Date of birth'} value={value} onChange={setValue}>
        <Birthday.Day
          placeholder={'DD'}
          name={'birthday.day'}
          nextFocus={'birthday.month'}
        />
        <Birthday.Separator />
        <Birthday.Month
          placeholder={'MM'}
          name={'birthday.month'}
          nextFocus={'birthday.year'}
        />
        <Birthday.Separator />
        <Birthday.Year placeholder={'YYYY'} name={'birthday.year'} />
      </Birthday>
      <br />
      <br />
      <Birthday label={'Date of birth'} value={value} onChange={setValue}>
        <Birthday.Day
          component={Input}
          placeholder={'DD'}
          nextFocus={'birthday.month2'}
        />
        <Birthday.Separator />
        <Birthday.Month
          component={Input}
          placeholder={'MM'}
          name={'birthday.month2'}
          nextFocus={'birthday.year2'}
        />
        <Birthday.Separator />
        <Birthday.Year
          component={Input}
          placeholder={'YYYY'}
          name={'birthday.year2'}
        />
      </Birthday>
      <br />
      <br />
      <Birthday
        label={'Date of birth'}
        value={value}
        onChange={setValue}
        display={{ day: '10', month: '02', year: '1994' }}
        InputLabelProps={{ className: styles.label }}
      >
        <Birthday.Day error className={styles.day} placeholder={'DD'} />
        <Birthday.Month error className={styles.month} placeholder={'MM'} />
        <Birthday.Year error className={styles.year} placeholder={'YYYY'} />
        <FormHelperText error>nextFocus is disabled!</FormHelperText>
      </Birthday>
    </Box>
  );
};

export default BirthdayTextField;
