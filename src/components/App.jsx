import React from "react";
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovie = this.state.movies.filter(item => item.id !== movie.id);

    this.setState({
      movies: updateMovie
    });
  }

  addMovieToWillWatch = movie => {
    const updateMovieWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  }

  removeMovieFromWillWatch = movie => {
    const updateMovieWillWatch = this.state.moviesWillWatch.filter(item => item.id !== movie.id);

    this.setState({
      moviesWillWatch: updateMovieWillWatch
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h3>Will Watch: <br/> {this.state.moviesWillWatch.length} movies</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
