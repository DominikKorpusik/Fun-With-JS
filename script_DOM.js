let input = document.getElementById("userInput");
let button = document.getElementById("enter");
let deleteButton = document.getElementsByClassName("delete");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let created_li = document.createElement("li");
    created_li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""
}

function deleteListElement() {
    let created_li = document.createElement("li");
    created_li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""
}

for (let i = 0; i < deleteButton.length; i++) {
    const db = deleteButton[i];
    db.addEventListener("click", function () {

    })
}



// deleteButton.forEach(db => {
//     db.addEventListener("click", function () {
//         console.log("delete")
//     })
// });


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

li.forEach(li => {
    if (li.classList.contains("done")) {
        li.addEventListener("click", function () {
            li.classList.remove("done");
        })
    } else {
        li.addEventListener("click", function () {
            li.classList.add("done");
        })
    }
});

