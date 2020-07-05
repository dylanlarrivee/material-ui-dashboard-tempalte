import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, region, sent, other) {
  return { name, region, sent, other };
}

const rows = [
  createData('Campaign 1', 'Camp1_Region', 2000, 24, 4.0),
  createData('Campaign 2', 'Camp2_Region', 100, 37, 4.3),
  createData('Campaign 3', 'Camp3_Region', 45000, 24, 6.0),
  createData('Campaign 4', 'Camp4_Region', 20000, 67, 4.3),
  createData('Campaign 5', 'Camp5_Region', 10, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const CustomizedTables = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  return (
    <Paper className={classes.root}>
    <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Campaign Name</StyledTableCell>
            <StyledTableCell align="right">DCM Region</StyledTableCell>
            <StyledTableCell align="right">Sent Count</StyledTableCell>
            <StyledTableCell align="right">Export Adience Group</StyledTableCell>
            <StyledTableCell align="right">Other Row</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.region}</StyledTableCell>
              <StyledTableCell align="right">{row.sent}</StyledTableCell>
              <StyledTableCell align="right">
              <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >
                    Export records
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">{row.other}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </Paper>
  );
}

export default CustomizedTables;