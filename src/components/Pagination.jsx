import React from 'react';
import '../css/pagination.css';
import cn from 'classnames';

const randomstring = require('randomstring');

const Pagination = ({ page, totalPages, changePage }) => {

  const creatButtons = targetPage => {
    if (totalPages < 6) {
      const buttons = new Array(totalPages).fill('').map((value, index) => index + 1);
      return buttons;
    } else if (targetPage < 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    } else if (targetPage >= 4 && targetPage < totalPages - 4) {
      return [1, '...', targetPage -1, targetPage, targetPage + 1, '...', totalPages];
    } else {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
  };

  const getClassLink = value => {
    const bool = page === value;
    return cn('pagination__button', {'pagination__button--active': bool});
  }

  const pageButtons = creatButtons(page);
  
  return (
    <ul className="pagination">
      <li className="pagination__button" onClick={() => changePage(page - 1)}>
        &laquo;
      </li>
      {pageButtons.map(value => (
        <li
          className={getClassLink(value)}
          key={randomstring.generate(5)}
          onClick={() => changePage(value)}
        >
          {value}
        </li>
      ))}
      <li className="pagination__button" onClick={() => changePage(page + 1)}>
        &raquo;
      </li>
    </ul>
  );
};

export default Pagination;