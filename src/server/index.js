import express from 'express';
import path from 'path';
import { buildMovie, buildMovies } from './utils/buildMovies';
// Create Express App
const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const movieNames = [
  "Batman Begins",
  "The Dark Knight",
  "The Dark Knight Rises"
];

app.get('/',  (req, res) => {
  buildMovies(movieNames).then((movies) => {
    res.render('index', { movies: movies })
  });
});

app.listen(3000, () => console.log('Starting server at http://localhost:3000'));
