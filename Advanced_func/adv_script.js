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
