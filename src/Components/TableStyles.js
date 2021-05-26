import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F4F5F7',
    color: '#4B5562',
  },
  body: (props) => ({
    wordBreak: props?.break === 'break' ? 'break-all' : 'inherit',
    minWidth: props?.num === 'num' ? '50px' : '100px',
    fontSize: 14,
  }),
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    border: `2px solid #fff !important`,
  },
}))(TableRow);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tbody: {
    border: `2px solid #fff !important`,
  },
  date: {
    cursor: 'pointer',
  },
});
