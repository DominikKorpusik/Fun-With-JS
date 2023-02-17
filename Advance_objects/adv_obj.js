//reference type

var obj = { value: 10 };
var obj1 = obj;
var obj2 = { value: 10 };

obj === obj1 // True
obj === obj2 // False
obj.value = 15;
obj1.value; //15
obj2.value; //10



//context
//instantiation