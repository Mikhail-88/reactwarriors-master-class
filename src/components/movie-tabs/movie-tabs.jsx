import React from 'react';
import cn from 'classnames';
import './movie-tabs.scss';

export const MovieTabs = ({ sort_by, updateSortBy }) => {
  const handleClick = value => {
    return () => updateSortBy(value)
  };

  const getClassLink = value => {
    const isActiveClass = sort_by === value;
    
    return cn('btn btn-info', {'active': isActiveClass});
  }

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item m-1">
        <button 
          className={getClassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
        Popularity
        </button>
      </li>
      <li className="nav-item m-1">
        <button 
          className={getClassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
        Revenue
        </button>
      </li>
      <li className="nav-item m-1">
        <button 
          className={getClassLink("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average
        </button>
      </li>
    </ul>
  )
};