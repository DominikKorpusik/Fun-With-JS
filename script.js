let database = [
    {
        username: "Dominik",
        password: "super"
    },
    {
        username: "Arnold",
        password: "gym"
    }, {
        username: "God",
        password: "666"
    },
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired!"
    },
    {
        username: "Sally",
        timeline: "Stay Hard!"
    },
    {
        username: "Marty",
        timeline: "Whom..."
    },
    {
        username: "Bob",
        timeline: "When???"
    }
];

let userNamePrompt = prompt("What's your username?")
let userPasswordPrompt = prompt("What's your password?")

//Function declaration
function isUserValid(userName, userPassword) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === userName &&
            database[i].password === userPassword) {
            return true;
        }
    }
    return false;
}

function signIn() {
    let isValid = isUserValid(userNamePrompt, userPasswordPrompt)
    if (isValid === true) {
        console.log(newsFeed);
    } else {
        console.log("Welcome Traveler!")
    }

}

signIn()

// //Function expression
// var newFunction = function () {

// };

// //Expression - Is something that produce a value.
// 1 + 3;
// var a = 2;
// return true;

// //calling or invoking a function
// alert()
// newFunction(param1, param2)

// //assign a variable
// var a = true;

// //function vs method
// function thisIsAFunction() {

// }

// var obj = {
//     thisIsAMethod: function () {

//     }
// }

// thisIsAFunction()
// obj.thisIsAMethod()

