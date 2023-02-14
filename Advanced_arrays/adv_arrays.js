const array = [1, 2, 10, 16, 3, 6, 5, 44, 45, 34, 6, 754, 65, 34];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log('array: ', array)
console.log('forEach: ', double);

//map, filter, reduce

//map, new Array
const mapArray = array.map(num => num * 2);

console.log('map, multiply: ', mapArray);

const mapArray2 = array.map(num => num % 2);

console.log('map, modulo: ', mapArray2);

//filter, new Array
const filterArray = array.filter(num => num % 2);
console.log('filter, modulo: ', filterArray);

//reduce, new Array
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce, add: ', reduceArray);
