import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PurpleButton from '../common/buttons/PurpleButton';
import GreenButton from '../common/buttons/GreenButton';
import SmallGreenButton from '../common/buttons/SmallGreenButton';
import SmallPurpleButton from '../common/buttons/SmallPurpleButton';
import { Box } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'white',
    color: '#6DAB00',
  },
  body: {
    fontSize: 14,
  },
  buttons: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, roles, contact, sales, actions) {
  return { name, roles, contact, sales, actions };
}

const rows = [
  createData('John Doe', 'manager', 'jdoe@test.com', 1400, 'view, update'),
  createData('John Doe', 'manager', 'jdoe@test.com', 1400, 'view, update'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ActiveStaff = () => {
  const classes = useStyles();

  const handleView = (e) => {
    console.log('View Staffs');
  };
  const handleUpdate = (e) => {
    console.log('Update Staffs');
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align='right'>Role</StyledTableCell>
            <StyledTableCell align='right'>Contact Details</StyledTableCell>
            <StyledTableCell align='right'>Sales</StyledTableCell>
            <StyledTableCell align='right'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.roles}</StyledTableCell>
              <StyledTableCell align='right'>{row.contact}</StyledTableCell>
              <StyledTableCell align='right'>{row.sales}</StyledTableCell>
              <StyledTableCell align='right'>
                <Box className={classes.buttons}>
                  <SmallGreenButton onClick={handleView}>View</SmallGreenButton>
                  <SmallPurpleButton onClick={handleUpdate}>
                    Update
                  </SmallPurpleButton>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActiveStaff;
