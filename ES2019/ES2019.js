// flat()

const array = [1, [2, 3], 4, [5, 6]];
array.flat() // [1, 2, 3, 4, 5, 6]

const array2 = [1, [2, 3, 4, [5, 6]]];
array2.flat() // [1, 2, 3, 4, Array(2)]

const entries = ['bob', 'sally', , , , , , , 'cindy'];
entries.flat(); //['bob', 'sally', 'cindy']

// flatMap();
const arrayFlatMap = array.flatMap(dig => dig + '!'); //['1!', '2,3!', '4!', '5,6!']


//trim
const userEmail = '               eddie@gmail.com';
const userEmail2 = 'Johnyd@gmail.com                 ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries

const userProfiles = [['commanderTom', 23], ['derekZZ', 40], ['hasel', 18]];

Object.fromEntries(userProfiles);

//
try {
    bob + 'hi'
} catch {
    console.log("You messed up")
}