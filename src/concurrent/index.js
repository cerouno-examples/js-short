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
    } else {
      return null;
    }
  })
}

const movies = [
  "Batman Begins",
  "The Dark Knight",
  "The Dark Knight Rises"
];
