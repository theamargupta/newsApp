import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  },
}));

const SearchBar = ({ input, handleInput }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      fullWidth
      id='standard-basic'
      value={input}
      onChange={handleInput}
      label='Search'
    />
  );
};
export default SearchBar;
