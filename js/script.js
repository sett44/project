"use strict"; //строго в начале скрипта

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из последних прсомотренных фильмов?',''),
      b = prompt('На сколько оцените его??',''),
      c = prompt('Один из последних прсомотренных фильмов?',''),
      d = prompt('На сколько оцените его??','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
