const first = () => {
    const greet = "Hi";
    const second = () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. The function executed.
// It's never going to execute again.
//BUT it's going to remember that there are referenes to those variables
//so the child scope always has access to the parent scope.

//Currying - It's the process of converting a function that takes
//multiple arguments, into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //12
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); //25

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5)

//Avoiding Side Effects, functional purity.

//Exercise
//Solve these problems:

//#1 Create a one line function that adds two parameters
const add = (a, b) => a + b
//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) //17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //16

// //What are the two elements of a pure function?