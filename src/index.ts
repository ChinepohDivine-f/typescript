let sales: number = 123_456_7
console.log(sales);

/// javascript types:
// number
// string
// boolean
// null
// undefined
// object
    
/// typescript additional types
// any
// unknown
// never
// enum
// tuple


// arrays in ts

let numbers: number[] = []; // declare an empty number array
numbers[0] = 1;
numbers[1] = 3;
numbers.forEach(n => console.log(n * 0.61));


// tuples 
// these are fixed size arrays with well defined data types

let array: [number, string] = [1, 'Pete'];
