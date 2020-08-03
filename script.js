"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const PersonaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const              a = prompt('Один из последних фильмов?', ""),
                   b = +prompt('Оцените его', ""),
                   c = prompt('Один из последних фильмов?', ""),
                   d = +prompt('Оцените его', "");

PersonaMovieDB.movies[a] = b;
PersonaMovieDB.movies[c] = d;

console.log(PersonaMovieDB);






