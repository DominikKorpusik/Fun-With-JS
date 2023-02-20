// // IIFE
////js1
// var myaPP = {};

////js2
// (function () {
//     myaPP.add = function (a, b) {
//         return a + b;
//     }
// })();

// CommonJs + Browserify

//// js1
// module.exports = function add(a, b) {
//     return a + b;
// };

// //js2
// var add = require('./add');

// ES6 + Webpack2

//js1
export const add = (a, b) => a + b;
//or
export default function add(a, b) {
    return a + b;
}

//js2
import { add } from '.add';
//or
import add from '.add';