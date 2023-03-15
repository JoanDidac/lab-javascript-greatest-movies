
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
function orderAlphabetically(kakas) {

    const sortedMovies = [...kakas].sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
          return 0;
    });
  
    const titles = sortedMovies.map(kaka => kaka.title);
  
    return titles.slice(0, 20);
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function(movie) {
      let duration = movie.duration;
      let minutes = 0;
      if (duration.includes('h') && duration.includes('min')) {
         let time = duration.split(' ');
        minutes += parseInt(time[0]) * 60;
        minutes += parseInt(time[1]);
      } else if (duration.includes('h')) { // 'h' esta definido en data.js idiota so 'hours' will never work...
        minutes += parseInt(duration) * 60;
      } else {
        minutes += parseInt(duration);
      }
      let newMovie = Object.assign({}, movie);
      newMovie.duration = minutes;
      return newMovie;
    });
  }
  
//  Crea un nuevo movie obj con las mismas propiedades de el original pero con la duration modificada(Object.assign())

// Se pasa un objecto vacio como primer argumento y el obj movie como segundo parametro para asegurar que el nuevo obj newMovie tiene las mismas propiedades que movie(new-duration) 

// BONUS - Iteration 8: Best yearly score average - Best yearly score average


function bestYearAvg(movies) {
    if (movies.length === 0) {
      return null;
    }
  
    // crea obj para almacenar avg de cada año
    const scoresByYear = {};
  
    movies.forEach(movie => {
      const year = movie.year;
      const score = movie.score;
  
      if (!scoresByYear[year]) {
        scoresByYear[year] = {
          total: score,
          count: 1
        };
      } else {
        scoresByYear[year].total += score;
        scoresByYear[year].count++;
      }
    });
  
    // calcular la media para cada año segun el score 
    const averagesByYear = {};
    for (const year in scoresByYear) {
      averagesByYear[year] = scoresByYear[year].total / scoresByYear[year].count;
    }
    // filtra el año con la media mas alta ahora que estan ordenados
    let bestYear = null;
    let bestAvg = 0;
    for (const year in averagesByYear) {
      const avg = averagesByYear[year];
      if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
        bestYear = year;
        bestAvg = avg;
      }
    }
  
    return `The best year has been ${bestYear} with an a score of ${bestAvg.toFixed(1)}`;
  }


  
