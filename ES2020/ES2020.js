//  ES2020

//  BigInt
typeof 1n //  "bigint"
Number.MAX_SAFE_INTEGER //  9007199254740991

//  Optional Chaining Operator ?.
// Working on objects and checking their properties
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    },
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning'
    }
}

if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
} else {
    let weight2 = undefined;
}

let weight = andrei_pokemon?.pikachu?.weight;
console.log(weight)

//  Nullish Coalescing Operrator ??
// It's checks if its null or undefinded
let power = andrei_pokemon?.pikachu?.power ?? 'no power'

