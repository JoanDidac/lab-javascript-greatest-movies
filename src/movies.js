
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// function getAllDirectors(movies) {
//     return movies.map(movie => movie.director);
//   }
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return [...new Set(directors)];
  }
  
  



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMovies = movies.filter(movie => 
    ( movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')));
    return filteredMovies.length;
  }


  



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const scores = moviesArray.reduce((total, movie) => {
      if (typeof movie.score === 'number') {
        return total + movie.score;
      } else {
        return total;
      }
    }, 0);
  
    const average = scores / moviesArray.length;
    return parseFloat(average.toFixed(2));
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const scores = dramaMovies.reduce((total, movie) => {
      if (typeof movie.score === 'number') {
        return total + movie.score;
      } else {
        return total;
      }
    }, 0);
  
    const average = scores / dramaMovies.length;
    return parseFloat(average.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    // Crear shallow copy para evitar mutar el array original que nos dan
    const moviesCopy = [...movies];
  
    // Sort () para ordenar por año
    moviesCopy.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        // condicion para checkear si dos pelis son del mismo año y ordenar alfabeticamente instead if condition is matched
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  
    return moviesCopy;
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
