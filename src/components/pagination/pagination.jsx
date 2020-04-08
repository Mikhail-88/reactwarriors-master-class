import React from 'react';
import './pagination.scss';
import cn from 'classnames';

const randomstring = require('randomstring');
const separate = "...";
const maxShowPage = 5;

const creatButtons = (targetPage, totalPages) => {
  if (totalPages < 6) {
    return new Array(totalPages).fill('').map((value, index) => index + 1);
  }

  if (targetPage <= maxShowPage) {
    return [1, 2, 3, 4, 5, separate, totalPages];
  }
  
  if (targetPage >= maxShowPage && targetPage <= totalPages - maxShowPage) {
    return [1, separate, targetPage -1, targetPage, targetPage + 1, separate, totalPages];
  }
  
  return [1, separate, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
};

const Pagination = ({ page, totalPages, changePage }) => {

  const getClassLink = value => {
    const isActiveClass = page === value;
    return cn('pagination__button', {'pagination__button--active': isActiveClass});
  }

  const pageButtons = creatButtons(page, totalPages);
  
  return (
    <div className="pagination">
      <button
        disabled={page === 1 ? 'disabled' : ''}
        className="pagination__button" 
        onClick={() => changePage(page - 1)}
      >
        &laquo;
      </button>
      {pageButtons.map(value => (
        <button
          disabled={value === separate ? 'disabled' : ''}
          className={getClassLink(value)}
          key={randomstring.generate(5)}
          onClick={() => changePage(value)}
        >
          {value}
        </button>
      ))}
      <button
        disabled={page === totalPages ? 'disabled' : ''}
        className="pagination__button" 
        onClick={() => changePage(page + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;