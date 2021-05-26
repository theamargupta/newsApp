import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const BasicPagination = ({ handleChangePage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        onChange={handleChangePage}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
};
export default BasicPagination;
