var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat"
];

var items = [
    "apple",
    "gun",
    "sword",
    "table",
];

for (let i = 0; i < todos.length; i++) {
    const a = todos[i];
    console.log(`${a} ${i}!`)
}

todos.forEach((todo, i) => {
    console.log(`${todo} ${i}!`)
});

logArray = (todo, i) => {
    console.log(`${todo} ${i}!`)
}

items.forEach(logArray);



let counterOne = 1
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}