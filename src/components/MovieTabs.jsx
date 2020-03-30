import React from 'react';
import cn from 'classnames';
import '../css/movieTabs.css';

export const MovieTabs = ({ sort_by, updateSortBy }) => {
  const handleClick = value => {
    return () => updateSortBy(value)
  };

  const getClassLink = value => {
    const bool = sort_by === value;
    return cn('nav-link', {'active': bool});
  }

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div 
          className={getClassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
        Popularity
        </div>
      </li>
      <li className="nav-item">
        <div 
          className={getClassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
        Revenue
        </div>
      </li>
      <li className="nav-item">
        <div 
          className={getClassLink("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average
        </div>
      </li>
    </ul>
  )
};