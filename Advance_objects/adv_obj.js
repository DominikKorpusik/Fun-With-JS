//reference type

var obj = { value: 10 };
var obj1 = obj;
var obj2 = { value: 10 };

console.log(`var obj = { value: 10 };
var obj1 = obj;
var obj2 = { value: 10 };
`)

console.log("obj === obj1: ", obj === obj1) // True
console.log("obj === obj2: ", obj === obj2) // False

//context vs socope

function func() {
    let a = 4; //scope
}
//console.log(a) // a is not defined

// this refers to what object it's inside of
console.log("this: ", this)
console.log("this === window: ", this === window) // True

function a() {
    console.log(this);
}
a() //window

const obj3 = {
    a: function () {
        console.log(this); //obj3
    }
}
obj3.a();


//instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }

    play() {
        console.log(`Weeeeee I'm a ${this.type}`)
    }
}

const wizard = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

console.log(wizard.introduce())
console.log(wizard.play())
console.log(wizard2.introduce())
console.log(wizard2.play())
