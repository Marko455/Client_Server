import { movies } from "../models/movieModel.js"; 
import { listaFilmova } from "../models/movieModel.js";

function getMovie(id) {
    if(!id) {
        return movies;
    }
    return movies.find(x => x.id == id);
}

function getMovies(rating, name) {
    if(!rating && !name) {
        return movies;
    }
    return movies.find(x => x.rating == id || x.title == name);
}

function addMovies(newMovie) {
    movies.push(newMovie);
    return;
}

function updateMovie(id, newMovieData) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, newMovieData);
    return newMovieData;
}

function updatePartOfMovie(id, newMovieData) {
    let oldMovie = movies.find(x => x.id == id);
    let movieDetailsToChange = Object.keys(newMovieData);
    for(let movieDetail of movieDetailsToChange) {
        if(oldMovie[movieDetail]) {
            oldMovie[movieDetail] = newMovieData[movieDetail];
        }
    }
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1, oldMovie);
    return oldMovie;
}

function deleteMovie(id) {
    let oldMovieIdx = movies.findIndex(x => x.id == id);
    movies.splice(oldMovieIdx, 1);
    return;
}

function medianMovie (rating){
    const median = arr => {
        const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        };
        console.log(median([postData.rating]));
}

async function dodajListuFilmova(x) {
    x.push(listaFilmova);
    return;
}

export const methods = {
    getMovie,
    getMovies,
    addMovies,
    updateMovie,
    updatePartOfMovie,
    deleteMovie,
    medianMovie,
    dodajListuFilmova
}