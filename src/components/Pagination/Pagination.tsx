import './Pagination.css';
import { NavLink } from 'react-router-dom';
import { IPagination as IPagin } from '../Types/index';
import { increment } from '../../store/reducers/UserSlice';
import { useAppDispatch } from '../../hooks/redux';

const Pagination = ({ currentPage, pageCount }: IPagin) => {
  const dispatch = useAppDispatch();
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  const handleClick = (page: number) => {
    console.log(page);
  };

  return (
    <div className="pagination__buttons">
      {pages.map((page) => (
        <NavLink to={`/?page=${page}`} key={page}>
          <button
            data-testid="pagination"
            key={page}
            className={`page__button ${page === currentPage ? 'active__num' : ''}`}
            disabled={page === currentPage}
            onClick={() => {
              dispatch(increment(page));
              handleClick(page);
            }}
          >
            {page}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Pagination;
