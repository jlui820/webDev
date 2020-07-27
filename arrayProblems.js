let printReverse = (array) => {
  for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}


let isUniform = (array) => {
  let ele = array[0];

  for (let i = 1; i < array.length; i++) {
    let cur = array[i];

    if (cur !== ele) {
      return false;
    }
  }

  return true;
}

let sumArray = (array) => {
  let total = 0;

  array.forEach(num => {
    total += num;
  })

  return total;
}

console.log(sumArray([1, 2, 3, 4]))

let max = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(max([1, 2, 3, 4]))