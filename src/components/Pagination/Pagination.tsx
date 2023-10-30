import './Pagination.css';
import { Link } from 'react-router-dom';
import { IPagination as IPagin } from '../Types/index';

const Pagination = ({ currentPage, setCurrentPage, pageCount }: IPagin) => {
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
        <Link to={`/?page=${page}`} key={page}>
          <button
            key={page}
            className={`page__button ${page === currentPage ? 'active' : ''}`}
            disabled={page === currentPage}
            onClick={() => {
              setCurrentPage(page);
              handleClick(page);
            }}
          >
            {page}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
