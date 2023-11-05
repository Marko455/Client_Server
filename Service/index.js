import { methods } from './handlers/movieHandler.js';
import express from "express";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api', router);

router.route('/movie/:id')
  .get((req, res) => {
    const id = req.params?.id;
    const movie = methods.getMovie(id);
    res.json(movie);
  });


router.route('movie/median')
.get((req, res) => {
  // metoda za medijan
    const median = arr => {
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      };
      console.log(median([postData.rating]));
    // dohvati mi filmove
    // mapiraj mi filmove u jedan objekt
    // formula za medijan -> result
    return result;
  });

router.route('/movie')
  .get((req, res) => {
    const rating = req.query?.rating;
    const name = req.query?.name;
    const movies = methods.getMovies(rating, name);
    res.json(movies);
  });

router.route('/movie')
  .post((req, res, next) => {
    const movieData = req.body;
    methods.addMovies(movieData);
    res.status(204).json({});
  });

router.route('/movie/:id')
  .put((req, res) => {
    const id = req.params?.id;
    const updatedMovie = req.body;
    const result = methods.updateMovie(id, updatedMovie);
    res.status(200).json(result);
  });

router.route('/movie/:id')
  .patch((req, res) => {
    const id = req.params?.id;
    const movieData = req.body;
    const result = methods.updatePartOfMovie(id, movieData);
    res.status(200).json(result);
  });

router.route('/movie/:id')
  .delete((req, res) => {
    const id = req.params?.id;
    methods.deleteMovie(id);
    res.status(200);
  });
//Zadatak 1
router.route('/movie')
  .post((req, res, next) => {
    const movieData = req.body;
    methods.dodajListuFilmova(movieData);
    res.status(204).json({});
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})