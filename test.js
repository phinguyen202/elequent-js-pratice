function sum(...numbers) {
    return numbers.reduce((a,b) => {
        return a + b;
    })
}

console.log(sum(1,2,3));

var array = [1,2,3];

console.log(sum(...array));