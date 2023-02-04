let database = [
    {
        username: "Dominik",
        password: "super"
    }
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired!"
    },
    {
        username: "Sally",
        timeline: "Stay Hard!"
    }
];

let userNamePrompt = prompt("What's your username?")
let userPasswordPrompt = prompt("What's your password?")

//Function declaration
function signIn(userName, userPassword) {
    if (database[0].username === userName &&
        database[0].password === userPassword) {
        console.log(newsFeed)
    } else {
        alert("Welcome Traveler!")
    }
}
signIn(userNamePrompt, userPasswordPrompt)

//Function expression 
var newFunction = function () {

};

//Expression - Is something that produce a value. 
1 + 3;
var a = 2;
return true;

//calling or invoking a function
alert()
newFunction(param1, param2)

//assign a variable
var a = true;

//function vs method
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function () {

    }
}

thisIsAFunction()
obj.thisIsAMethod()

