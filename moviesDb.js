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

let watchedMovies = (array) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i].hasWatched === true) {
      console.log ('You have watched ' + array[i].title + ' - ' + array[i].rating + 'stars')
    } else {
      console.log ('You have not seen ' + array[i].title + ' - ' + array[i].rating)
    }
  } 
}

console.log(watchedMovies(movies));