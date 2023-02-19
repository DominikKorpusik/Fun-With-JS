What is a program?
Well, a program has to do some simple things.
It has to:
-allocate memory (Otherwise, we wouldn't be able to have variables or even have a file on our computer)
-parse and execute scripts (Which means it read and run commands)

JavaScript Engine
That each browsers implements, in Chrome it's V8. 
V8 reads the js that we write. It changes into machine executable instructions for the browser.
The engine, consists of two parts, a memory heap and a call stack.

The memory heap, where memory allocation happens.
const a = 1;
const b = 10;
const c = 100;
Memory leak, happen when we have unused memory, it fills up this memory heap.
That why we might hear, why global variables are bad. Global variables are bad because we don't forget to clean up after ourselves, we fill up this memory head and eventually the browser will not be able to work.

The call stack, this is where code is read and executed.
console.log('1');
console.log('2');
console.log('3');

const one = () =>{
    const two = () => {
        console.log('4');
    }
    two();
}

call stack:
console.log('4');
two()
one()

We first run the one(), as we enter into this call stack, we see that we run another function two(). So 'two' goes on top of the call stack, and now we run the 'two' function which is console.log().


JavaScript is a single threaded language that can be non-blocking?

Single threaded means that it has only one call stack, you can do only one thing at a time. Call stack is first in last out. So whatever's at the top the call stack gets run first then below that, below that, till the call stack is empty.
Other languages can have multiple call stacks and these are called multithreaded. It's beneficial to have multiple call stack, we don't have to keep waiting around for stuff.

Why was JavaScript designed to be single threae?
Well, running code on a single thread can be quite easy, since you don't have to deal with complicated scenerios that arise in multithreaded environment. You just have one thing to worry about.
Issues with multithreaded environment, you can have such thing as deadlocks.
Synchronous programming means, line one gets executed then line two gets executed then line three. The latter, can start before the first finishes, so next line, doesn't start until first finishes. Because of call stack.

Stack overflow:
//Recursion
function foo(){
    foo()
}
foo() //We keep adding foo() to the call stack, and we have a stack overflow.

JavaScript is single threaded, only one statement is executed at a time.

With synchronous task, if we have one function that takes up a lot of time, it's going to hold up the line.

Asynchronous. Synchronous executin is great becuse it's predictable. We know what happens one by one. But it can get slow. So when we have to do things like image processing or making request over the network like API calls. We need something more tha just synchronous tasks.

console.log('1');
setTimeout(() => {
    console.log('2')
}, 2000)
console.log('3');

JavaScript Run-Time Environment, web APIs, callback queue and and event loop.
Web APIs:
DOM (document)
AJAX (XMLHttpRequest)
Timeout (setTimeout)

Call stack -> WEB Api -> callback queue -> event loop

When is asynchronous happening?
It happens, when you try and talk between machines, like speaking to the database, making network requests, image processing, reading files.

JavaScript is  single threded language that can be non-blocking.
It has one call stack and it does one thing at a time.
In order to not block the single thread, it can be asynchronous with callback functions and these callback functions get run in the background, through the callback queue, then the event loop, to bring it back to the call stack.