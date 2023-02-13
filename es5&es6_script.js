// // let & const

// const player = 'Bobby';
// let exp = 100;
// let wizardLevel = false;

// if (exp > 90) {
//     let wizardLevel = true;
// }

// //You can change the properties of the object, still you can't reassign.
// const obj = {
//     player: 'Jack',
//     exp: 100,
//     wizardLevel: false,
// }

// //Destructuring

// const recruit = {
//     player: 'Mort',
//     exp: 99,
//     wizardLevel: false,
// }

// const player = recruit.player;
// const exp = recruit.exp;
// let wizardLevel = recruit.wizardLevel;

// const { player, exp } = recruit;


// //Object properties

// const name = 'John Snow';

// const obj = {
//     [name]: 'Hello',
//     [1 + 2]: 'Hihi'
// }


// // Template strings

// const name = "John";
// const age = 32;
// const pet = "Horse";

// const greeting = "Hello " + name + " you are "
//     + age + " years old, your " + pet + "is amazing.";

// const greetingB = `Hello ${name} you are ${age} years old, your ${pet} is amazing.`


// //Default arguments
// function greet(name = 'Johnny', age = 20, pet = "dog") {
//     return `Hello ${name} you are ${age} years old, your ${pet} is amazing.`
// }


// //Arrow functions

// function add(a, b) {
//     return a + b
// }

// const add = (a, b) => a + b;