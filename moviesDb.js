movies = [
  {
    title: 'revenge of the sith',
    rating: 4.5,
    hasWatched: true
  },
  {
    title: 'eurovision',
    rating: 5,
    hasWatched: true
  },
  {
    title: 'rogue one',
    rating: 4,
    hasWatched: false
  }
];

// let watchedMovies = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if(array[i].hasWatched) {
//       console.log ('You have watched ' + array[i].title + ' - ' + array[i].rating + 'stars')
//     } else {
//       console.log ('You have not seen ' + array[i].title + ' - ' + array[i].rating)
//     }
//   } 
// }

"---------------------------------------"

movies.forEach(movie => {
  let result = 'You have ';
  if (movie.hasWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }

  result += "\"" + movie.title + "\"";
  result += " - " + movie.rating + ' stars';
  console.log(result)
})

"--------------------------------------------"


movies.forEach(function (movie) {
  console.log(watchedMovies(movie))
})

function watchedMovies(movie) {
  let result = 'You have ';
  if (movie.hasWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }

  result += "\"" + movie.title + "\"";
  result += " - " + movie.rating + ' stars';
  return result
}

// console.log(watchedMovies(movies));