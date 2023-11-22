import './Pagination.css';
import Link from 'next/link';
import { IPagination as IPagin } from '../Types/index';

const Pagination = ({ currentPage, pageCount, setPages, value }: IPagin) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(`${i}`);
  }

  return (
    <div className="pagination__buttons">
      {pages.map((page) => (
        <Link href={`/main?keyword=${value}&page=${page}`} key={page}>
          <button
            data-testid="pagination"
            key={page}
            className={`page__button ${page === currentPage ? 'active__num' : ''}`}
            disabled={page === currentPage}
            onClick={() => {
              setPages(page);
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
