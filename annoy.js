// let answer = prompt('are we there yet?');

// while (answer !== 'yes' && answer !== 'yeah') {
//   let answer = prompt('are we there yet?');
// } 

// alert('Yay, we made it!')

let answer = prompt('are we there yet?');

while (answer.indexOf("yes") === -1) {
   answer = prompt('are we there yet?');
}

alert('Yay, we made it!')

