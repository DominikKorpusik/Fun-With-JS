const basket = ['apples', 'bannans', 'grapes'];
const detailedBasket = {
    apples: 5,
    bannana: 10,
    grapes: 1000,
}
//  for
for (let i = 0; i < basket.length; i++) {
    const e = basket[i];
    console.log(e);
}
//  forEach
basket.forEach(e => {
    console.log(e)
});

//  for of
//  iterating - arrays, strings
for (const item of basket) {
    console.log(item);
}

//  for in - properties
//  enumerating - objects
for (const key in detailedBasket) {
    console.log(key);
}