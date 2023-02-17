//String padding
//.padStart()
//.padEnd()

'Turtle'.padStart(10); // '    Turtle'
'Turtle'.padEnd(10);  //'Turtle    '

//Trailing commas in function's parameter lists and calls.

const fun = (a,
    b,
    c,
    d,
) => {
    console.log(a);
}
fun(1, 2, 3, 4,)

//
Object.values
Object.entries
Object.keys //Before

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.G'
}

//Before
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(ent => {
    console.log(ent);
})

Object.entries(obj).map(val => {
    return val[1] + val[0].replace('username', '')
})