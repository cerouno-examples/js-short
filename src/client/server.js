import express from 'express';
import cors from 'cors';
import { buildMovie } from '../server/utils/buildMovies';
// Create Express App
const app = express();

app.use(cors())

app.get('/movie.json',  (req, res) => {
  if (req.query.name) {
    buildMovie(req.query.name).then((movie) => {
      res.json(movie);
    });
  } else {
    res.json({});
  }
});

app.listen(8080, () => console.log('Starting server at http://localhost:8080'));
