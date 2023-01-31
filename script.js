let database = [
    {
        username: "Dominik",
        password: "super"
    }
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "So fck tired!"
    },
    {
        username: "Sally",
        timeline: "So fck tired!"
    }
];

let userNamePrompt = prompt("What's your username?")
let userPasswordPrompt = prompt("What's your password?")

function signIn(userName, password) {
    if (database[0].username == userNamePrompt &&
        database[0].password == userPasswordPrompt)
        alert("You in")
}

signIn()