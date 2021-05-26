import axios from 'axios';
import moment from 'moment';
import { StyledTableCell } from '../Components/TableStyles';
import { allNews } from './api';

export const getNewsRows = async (page, publishedAt) => {
  try {
    const res = await axios.get(allNews('bitcoin'), {
      params: {
        pageSize: 10,
        page: page,
        sortBy: publishedAt,
      },
    });
    if (res.data.status === 'ok') {
      console.log(res.data.articles);
      return res.data.articles.map((news, index) => ({
        key: index,
        num: (
          <StyledTableCell num={'num'}>
            {page !== 1 ? (page - 1) * 10 + index + 1 : index + 1}
          </StyledTableCell>
        ),
        urlToImage: (
          <StyledTableCell align='left'>
            <img src={news.urlToImage} width='80px' alt='' />
          </StyledTableCell>
        ),
        source: (
          <StyledTableCell align='left'>{news.source.name}</StyledTableCell>
        ),
        author: (
          <StyledTableCell
            break={news.author?.length > 20 ? 'break' : 'inherit'}
            align='left'
          >
            <p>{news.author}</p>
          </StyledTableCell>
        ),
        title: <StyledTableCell align='left'>{news.title}</StyledTableCell>,
        publishedAt: (
          <StyledTableCell align='left'>
            {moment(news.publishedAt).format('lll')}
          </StyledTableCell>
        ),
        url: (
          <StyledTableCell align='left'>
            <a href={news.url} target='_blank' rel='noopener noreferrer'>
              {news.url}
            </a>
          </StyledTableCell>
        ),
      }));
    }
  } catch (err) {
    console.error(err);
  }
};
