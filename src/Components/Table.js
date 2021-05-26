import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { StyledTableCell, StyledTableRow, useStyles } from './TableStyles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';

//Component
import { Pagination } from './index';

//Helper Function
import { columns } from '../utils/constants';
import { getNewsRows } from '../utils/services';
import { filterPosts } from '../utils/helper';

const BasicTable = ({ query }) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [filterRows, setFilterRows] = useState([]);
  const [page, setPage] = React.useState(1);
  const [publishedAt, setPublishedAt] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(Number(newPage));
  };
  const handlepublish = () => {
    setPublishedAt((value) => !value);
  };
  useEffect(() => {
    getNewsRows(page, publishedAt && 'publishedAt').then((res) => setRows(res));
  }, [page, publishedAt]);
  useEffect(() => {
    setFilterRows(filterPosts(rows, query));
  }, [rows, query]);
  console.log(rows);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {columns.map((data, index) => (
                <StyledTableCell
                  key={index}
                  align='left'
                  onClick={data.headerName === 'Date' && handlepublish}
                  className={data.headerName === 'Date' && classes.date}
                >
                  {data.headerName}
                  {data.headerName === 'Date' && (
                    <IconButton aria-label='filter list'>
                      {publishedAt ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      )}
                    </IconButton>
                  )}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {filterRows &&
              filterRows.map(
                ({
                  key,
                  num,
                  urlToImage,
                  source,
                  author,
                  title,
                  publishedAt,
                  url,
                }) => (
                  <StyledTableRow key={key}>
                    {num}
                    {urlToImage}
                    {source}
                    {author}
                    {title}
                    {publishedAt}
                    {url}
                  </StyledTableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination handleChangePage={handleChangePage} />
    </>
  );
};
export default BasicTable;
