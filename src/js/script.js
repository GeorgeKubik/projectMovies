

	'use strict';

	const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	

	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false

	};

	for (let i = 0; i < 2; i++) {
		const lastWatchedMovie = prompt('Последний просмотренный фильм?', '');
		const rateMovie = +prompt('На сколько оцените его?', '');
		personalMovieDB.movies[lastWatchedMovie] = rateMovie;
	}

	console.log(personalMovieDB);
	console.log(personalMovieDB.movies);



	

	
	
	
	


	



	


	

