import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, LinearProgress } from '@material-ui/core';

const ProgressBar = (props) => {
  return (
    <Box my={2}>
      <Box minWidth={35}>
        <Typography variant='h6' color='secondary'>{`${Math.round(
          props.value
        )}% completed`}</Typography>
      </Box>
      <Box width='100%'>
        <LinearProgress variant='determinate' {...props} color='primary' />
      </Box>
    </Box>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
export default ProgressBar;
