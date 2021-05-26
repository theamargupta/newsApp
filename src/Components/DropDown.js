import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  Grid,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = ({ label }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={1} alignItems='flex-end'>
        <Grid item>
          <FilterListIcon />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
            <Select
              style={{ paddingBottom: '0px' }}
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default SimpleSelect;
