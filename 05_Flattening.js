let arrays = [[1, 2, 3], [4, 5], [6]];

function fattening(array) {
  return array.reduce((first, second) => first.concat(second));
}

console.log(fattening(arrays));