

	'use strict';

	let numberOfFilms;
	
	function start() {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}

	}
	start();

	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false

	};

	function rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Последний просмотренный фильм?', '');
			const b = +prompt('На сколько оцените его?', '');
		
			if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			} else {
				i--;
				console.log('Error');
			}
		}
	}
	/* rememberMyFilms(); */

	function detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			console.log('Мало');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Ну среднечок'); 
		} else if (personalMovieDB.count > 30) {
			console.log('GJ');
		} else {
			console.log('Error');
		}
	}
	/* detectPersonalLevel(); */

	function showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	}
	showMyDB(personalMovieDB.privat);

	function writeYourGenres() {
		for (let i = 1; i <= 3; i++) {
			let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, ' ');
			if (favoriteGenre == ' ' || favoriteGenre == null) {
				console.log('Еще раз укажите жанр');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = favoriteGenre;
			}
		}	
	}
	writeYourGenres();




	

	
	
	
	


	



	


	

