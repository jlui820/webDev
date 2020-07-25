// let isEven = (num) => {
//   return num % 2 === 0;
// }

// let factorial = (num) => {
//   let result = 1;

//   for (let i = 2; i <= num; i++) {
//     result *= 1;
//   }

//   return result; 
// }

let kebabToSnake = str => {
  // return str.split('-').join('_');
   let newStr = str.replace(/-/g, "_");
   return newStr

}

console.log(kebabToSnake('hello-world'));
console.log(kebabToSnake('dogs-are-awesome'));
console.log(kebabToSnake('blah'));