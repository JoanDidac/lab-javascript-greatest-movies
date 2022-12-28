
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let result = moviesArray.map(moviesArray => movies.director);

//if (movies.length > result.length ) {result.push(movies.director)}
return result
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let searchDrama = 'Drama';
    // const totalDrama =  movies.genre.find(genres => genres.includes(searchDrama));
    // console.log(totalDrama)
    let howMany = 0;
    for (let i=0 ; i < moviesArray.length ; i++) {

        if (moviesArray.length === 0 ) {
            return 0}

             
         if (movies.director === 'Steven Spielberg' && movies.genre[0] === 'Drama'||
             movies.director === 'Steven Spielberg' && movies.genre[1] === 'Drama'||
             movies.director === 'Steven Spielberg' && movies.genre[2] === 'Drama'||
             movies.director === 'Steven Spielberg' && movies.genre[3] === 'Drama') {
            howMany++;
            console.log(howMany);
         }

            // const result = movies.map(genres => genres === 'Drama' ? totalDrama[counter++] : genres);
            // console.log(result);


            // if (movies.director === 'Steven Spielberg' && movies.genre[0][1][2] === 'Drama') {
            // howMany++;
            // console.log(howMany);
            
            // } if ( movies.genre.find("Drama")) {
            // drama++;
    }
    return howMany
}


       


    







// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
