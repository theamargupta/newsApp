import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid } from '@material-ui/core';

import { Header, Table } from '../Components';
import SearchBar from '../Components/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '95vh',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='center' alignItems='center'>
        {/* Header */}
        <Grid item xs={12}>
          <Header />
          <Divider />
        </Grid>

        {/* Search Bar */}
        <Grid item xs={6}>
          <SearchBar input={input} handleInput={handleInput} />
        </Grid>

        {/* Table */}
        <Grid item xs={12} md={8}>
          <Table query={input} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
