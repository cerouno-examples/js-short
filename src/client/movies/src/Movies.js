import React, { Component } from 'react';

class Movies extends Component {
  render() {
    const { movies } = this.props;

    const list = movies.map((movie) => {
      return (<tr key={movie.name}>
        <td>{movie.name}</td>
        <td>{movie.score}</td>
      </tr>);
    });

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Pelicula</th>
            <th scope="col">Rotten Tomatoes Score</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    );
  }
}

export default Movies;
