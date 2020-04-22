import React, { Component } from "react";
import MovieItem from './movie-item/movie-item';
import { API_URL, API_KEY_3 } from '../utils/api';
import { MovieTabs } from './movie-tabs/movie-tabs';
import { FavoriteMovies } from './favorite/favorite-movies';
import SortButton from './sort-button/sort-button';
import TopButton from './top-button/top-button';
import Loader from './loader/loader';
import Pagination from './pagination/pagination';
import SearchPanel from './search-panel/search-panel';
import { NotFoundMovie } from './nothing-search/nothing-search';
import ErrorMessage from '../components/error-message/error-message';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      favoriteMovies: [],
      sort_by: "popularity.desc",
      isLoading: true,
      isError: false,
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

  componentDidCatch() {
    this.setState({
      isError: true,
    }); 
  }

  getMoviesFromServer = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies: data.results,
        isLoading: false,
        isError: false,
        totalPages: data.total_pages,
      });
    })
    .catch(() => {
      this.setState({
        isError: true,
        isLoading: false,
      });
    })
  }

  changePage = value => {
    if (value > 0 && value <= this.state.totalPages) {
      this.setState({
        page: value,
        isLoading: true
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
      isLoading: true,
      sort_by: value,
      page: 1,
    });
  }

  scrollTop = () => {
    this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  searchMovie = (movies, searchText) => {
    if (searchText.length < 2) {
  
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
    const { movies, favoriteMovies, sort_by, page, totalPages, isLoading, isError, searchText } = this.state;
    const visibleMovies = this.searchMovie(movies, searchText);
    const errorMessage = isError && <ErrorMessage />;
    const loading = isLoading && <Loader />;

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
              {errorMessage || loading || (!visibleMovies.length && <NotFoundMovie />) ||
                (
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
                )
              }
            </div>
          </div>
          <FavoriteMovies favoriteMovies={favoriteMovies} />
        </div>
        <TopButton scrollTop={this.scrollTop} />
      </div>
    );
  };
};

export default App;