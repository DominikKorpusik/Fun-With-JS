const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => {
        console.log("acc: ", acc);
        console.log("array: ", array);
        return acc.concat(array)
    }, []);

const DebFlattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => {
        debugger;
        return acc.concat(array)
    }, []);    