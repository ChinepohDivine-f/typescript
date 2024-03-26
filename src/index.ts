let sales: number = 123_456_7;
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
numbers.forEach((n) => console.log(n * 0.61));

// tuples
// these are fixed size arrays with well defined data types

let array: [number, string] = [1, "Pete"];

// enums

const enum Sizes { // using const generates more optimized js code
  Small = 1,
  Medium,
  Large,
}

// since small has been set to one, the index of the next element will the incriment

let mySize: number = Sizes.Medium;
console.log(mySize);

// functions

function puppy(puppyName: string): string {
  return "Hello Mr " + puppyName;
}

console.log(puppy("Snuckles"));

// objects in ts

let employee: {
  readonly id: number; // prevents us from modifying the id
  name: string;
  work: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Paul",
  work: "", // when defined we can asign an empty string
  retire: (date: Date) => {
    console.log(date);
  },
};

// its not advisable to use null

employee.work = "UI UX designer";

console.log(employee);

///
// type aliases

// we can declare our custome types in
//     ts which will make code cleaner and follow
//  the DRY principle

type Employee = {
  readonly id: number;
  name: string;
  work: string;
  retire: (date: Date) => void;
};

let anotherEmployee: Employee = {
  id: 2,
  name: "Peter",
  work: "Gardener",
  retire: (date: Date) => {
    console.log(date);
  },
};
