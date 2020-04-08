import React from "react";
import MovieItem from './movie-item/movie-item';
import { API_URL, API_KEY_3 } from '../utils/api';
import { MovieTabs } from './movie-tabs/movie-tabs';
import { FavoriteMovies } from './favorite/favorite-movies';
import SortButton from './sort-button/sort-button';
import Loader from './loader/loader';
import Pagination from './pagination/pagination';
import SearchPanel from './search-panel/search-panel';
import { NotFoundMovie } from './nothing-search/nothing-search';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      favoriteMovies: [],
      sort_by: "popularity.desc",
      isLoading: false,
      page: 1,
      totalPages: 0,
      searchText: ''
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.getMoviesFromServer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by ||
    prevState.page !== this.state.page) {
      this.getMoviesFromServer();
    }
  }

  getMoviesFromServer = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results,
        isLoading: true,
        totalPages: data.total_pages,
      })
    })
    .catch(error => {
      alert(`Something wrong... ${error}`)
      console.log(error)
    })
  }

  changePage = value => {
    if (value > 0 && value <= this.state.totalPages) {
      this.setState({
        page: value,
      });
    }
  };
  
  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);

    this.setState({
      movies: updateMovies
    });
  }

  addToFavorite = movie => {
    const updateFavoriteMovies = [...this.state.favoriteMovies, movie];

    this.setState({
      favoriteMovies: updateFavoriteMovies
    });
  }

  removeFromFavorite = movie => {
    const updateFavoriteMovies = this.state.favoriteMovies.filter(item => item.id !== movie.id);

    this.setState({
      favoriteMovies: updateFavoriteMovies
    });
  }

  sortByRate = () => {
    this.setState(prevState => ({
      movies: [...prevState.movies].sort((a, b) => b.vote_average - a.vote_average),
    }));
  }

  sortByReverseRate = () => {
    this.setState(prevState => ({
      movies: [...prevState.movies].sort((a, b) => a.vote_average - b.vote_average),
    }));
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value,
      page: 1,
    });
  }

  scrollTop = () => {
    this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  searchMovie = (movies, searchText) => {
    if (searchText.length === 0) {
      return movies;
    }

    return movies.filter(movie => movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase().trim()));
  }

  updateSearch = (searchText) => {
    this.setState({searchText});
  }

  render() {
    const { movies, favoriteMovies, sort_by, page, totalPages, isLoading, searchText } = this.state;
    const visibleMovies = this.searchMovie(movies, searchText);

    return (
      <div className="container" ref={this.myRef}>
        <div className="row mt-4 wrapper">
          <div className="col-9 content">
          <div className="mb-3">
            <SearchPanel 
              updateSearch={this.updateSearch} 
            />
          </div>
            <div className="row mb-4 navigation">
             <div className="col-9">
              <MovieTabs 
                sort_by={sort_by} 
                updateSortBy={this.updateSortBy} 
              />
             </div>
              <SortButton 
                sortByRate={this.sortByRate} 
                sortByReverseRate={this.sortByReverseRate} 
              />
            </div>
            <div className="row justify-content-center">
              <Pagination
                page={page}
                totalPages={totalPages}
                changePage={this.changePage}
              />
            </div>
            <div className="row card_container">
              {!visibleMovies.length && <NotFoundMovie />}
              {isLoading ? (
                visibleMovies.map(movie => (
                  <div className="col-6 mb-4 card_wrapper" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addToFavorite={this.addToFavorite}
                      removeFromFavorite={this.removeFromFavorite}
                    />
                  </div>
                ))
               ) : <Loader />}
            </div>
          </div>
          <FavoriteMovies favoriteMovies={favoriteMovies} />
        </div>
        <button 
          type="button" 
          className="button__top" 
          onClick={this.scrollTop}
          title="Go to top"
        >
          Top
        </button>
      </div>
    );
  }
}

export default App;
