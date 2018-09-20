import React, { Component } from 'react';
import Movies from './Movies';

const movieNames = ["The Dark knight", "Dumb and Dumber"];

class App extends Component {

  constructor(props){
    super(props);
    this.state = { movies: [] };
  }

  render() {
    return (
      <div className="container" style={{maxWidth:'600px'}}>
        <h1>Peliculas</h1>
        <Movies movies={this.state.movies} />
      </div>
    );
  }


  fetchMovie(name) {
    fetch(`http://localhost:8080/movie.json?name=${name}`).then((response) => {
      return response.json();
    }).then((movie) => {
      this.setState({ movies: [...this.state.movies, movie ]});
    });
  }

  componentDidMount() {
    movieNames.forEach((name) => {
      this.fetchMovie(name);
    })
  }

}

export default App;
