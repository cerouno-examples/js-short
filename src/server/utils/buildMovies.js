import axios from 'axios';

const getRTScore = (movieName) => {
  return axios.get('https://www.rottentomatoes.com/api/private/v2.0/search/', {
    params: {
      limit: 1,
      q: movieName
    }
  }).then((response) => {
    const movie = response.data.movies[0];
    if (movie) {
      return movie.meterScore
    }
    return null;
  })
}

export const buildMovie = (name) => {
  return getRTScore(movieName).then((score) => {
    if (score){
      return { name, score };
    }
    return {};
  });
}

export const buildMovies = (movies) => {
  return Promise.all(movies.map((name) => buildMovie(name)));
}

export default buildMovies;
