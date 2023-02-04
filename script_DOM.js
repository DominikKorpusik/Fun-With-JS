let input = document.getElementById("userInput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""
}

button.addEventListener("click", function () {
    if (inputLength() > 0) {
        createListElement();
    }
})

button.addEventListener("keydown", function (event) {
    console.log(event.key)
    if (inputLength() > 0 && event.key === 13) {
        createListElement();
    }
})