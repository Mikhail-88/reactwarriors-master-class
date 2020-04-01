import React from 'react';
import './movie-item.scss';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
  }

  trimOverview = (str, maxlength) => {
    if (str.length > maxlength) {
      return `${str.slice(0, maxlength).split('.').slice(0, -1).join('.')}.`;
    }
    return str;
  }

  getMovieImage = movie => {
    const image = `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`;
    const noImage = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
    const isImage = movie.backdrop_path || movie.poster_path;

    return isImage ? image : noImage;
  }

  handleClickRemove = (movie) => {
    return () => {
      this.setState({
        favorite: false
      });
      this.props.removeFromFavorite(movie);
    }
  }

  handleClickAdd = (movie) => {
    return () => {
      this.setState({
        favorite: true
      });
      this.props.addToFavorite(movie);
    }
  }
 
  render() {
    const { movie, removeMovie } = this.props;
    const { favorite } = this.state;
    
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.getMovieImage(movie)}
          alt="movie poster" />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <p className="card-rate mb-4">Rating: {movie.vote_average}</p>
          <p className="card-overview">
            {this.trimOverview(movie.overview, 680)}
          </p>
          <div className="card-buttons d-flex flex-column align-items-end">
            {favorite ? (
              <button 
                type="button" 
                className="btn btn-secondary mb-2" 
                onClick={this.handleClickRemove(movie)}
              >
                Remove Favorite
              </button>
            ) : (
              <button 
                type="button" 
                className="btn btn-success mb-2" 
                onClick={this.handleClickAdd(movie)}
              >
                Add to Favorites
              </button>
            )}
            <button 
              className="btn btn-danger" 
              onClick={removeMovie.bind(null, movie)}
            >
              Delete movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;