import React from 'react';
import PropTypes from 'prop-types';

import './favorite.scss';

export const FavoriteMovies = ({ favoriteMovies }) => {

  return (
    <div className="col-3 favorite">
      <h3>Favorites: <br/> {favoriteMovies.length} movies</h3>
      <ul className="list-group">
        {favoriteMovies.map(movie => {
          return (
            <li className="list-group-item" key={movie.id}>
              <div className="d-flex justify-content-between">
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};