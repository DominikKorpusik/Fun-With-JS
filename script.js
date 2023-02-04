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

function signIn(userName, userPassword) {
    if (database[0].username === userName &&
        database[0].password === userPassword) {
        console.log(newsFeed)
    } else {
        alert("Welcome Traveler!")
    }
}

signIn(userNamePrompt, userPasswordPrompt)