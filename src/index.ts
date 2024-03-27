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

/// union types

function kgToLbs(wieght: number | string): number {
  // union type
  // Narrowing
  if (typeof wieght === "number") return wieght * 2.2;
  else return parseInt(wieght) * 2.2;
}

// with the union type its good to check if argument is a number or a string
// so as to perform the right options

kgToLbs(10);
kgToLbs("10");

// type intersection
// with this we can asign two or more types to objects

// consider the example below

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // type anotation

let textBox: UIWidget = {
  drag: () => {}, // from the drag
  resize: () => {}, // from the resive type
};

/// literal types
// with this we can create varaible which are like constants
// and can only be set to the target

let quantity: 50 = 50; // can only be set to 50

// applying the union operator we can make the code even better

let anotherQuantity: 50 | 100 = 100; // it can be either 50 or 100

// create a quantity type to simplify things
type Quantity = 50 | 100; // can either be 50 or 100

let numberOfBooks: Quantity = 100; // a literal type

// literals can also be strings

type measurements = "m" | "cm";

let width: measurements = "cm";
console.log(width);

// nullable variables

function greet(name: string | null) {
  if (name) console.log("Hello " + name);
  else console.log("Hello!");
}

greet("Chinepoh");
greet(null);

// optional chaining

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// optional property access operator
console.log(customer?.birthday.getFullYear());

// optional element access operator
// customers?.[0]

// optional call
let log: any = null;
log?.("a"); // executed only when log is referencing an actual function

// the nullish coaelscing operator

let speed: number | null = null;
let ride = {
  // falsy (undefined, null, '', false, 0)
  speed: speed ?? 30, // if speed is not null or undefined, use the speed or else use the defual value: 30
};

// type assertion

/// let phone = document.getElementById("phone") as HTMLInputElement; // assert the the HTMLInputElement
// HTMLElement
// HTMLInputElement
/// phone.value; // the phone object can now acces the properties of HTMLInputElement

// there is not type convention when using the as keyword in ts

///  let anotherPhone = <HTMLInputElement>document.getElementById("tablet"); // same as using the as keyword
/// anotherPhone.value;

// the unkown type in ts

// the unkown type is better to be used than the any type as it forces
// us the programmer to ensure that types are used properly

type Book = string;

function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") document.toUpperCase();
  // if (document instanceof Book)
  //   document.
}

// the never type

function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  // setting the return type to never
  while (true) {
    // read a message from a queue
  }
}

// reject("..."); // code under this will not be executed becuase the return type is never
console.log("Hello World!"); // this will never be executed
console.log("hwhwh");

/// Classes and interfaces in type script

class Account {
  // readonly id: number; // make the id readonly and cannot be modified
  // owner: string;
  // private _balance: number; // make private
  nickname?: string; // make optional as not every account should have a nickname

  // parameter properties. this is the shortest and best way to create constructors as it reduces
  // amount of code to be written
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Amount");
    this._balance += amount;
  }

  // define a method to get the balance because it is private
  // and cannot be logged directly

  get balance(): number {
    // getter
    return this._balance;
  }

  set balance(value: number) {
    // setter
    if (value < 0) throw new Error("INvalid value");
    this._balance = value;

    // not that the getter and setter have thesame name
  }
}

let account = new Account(1, "Sam", 0);

account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account); // when dealing with custom object use the instanceof and not the type of
// so as to get the class or the type specified for the oject. if we use typeof then js will on return 'object'

// Union
// if(type of someObj === ' number') {}

// in js we have  various access control keywords
// private, public, and protected can be asigned to an attribute to of a function
// to grant permissions on how the user can access it.

// print balance to screen
// console.log(account.getBalance());

// index signatures
class SeatAssignment {
  // Index signature property
  [seatNumber: string]: string; // creates and array of seats
}

let seats = new SeatAssignment();
seats.A1 = "chinepoh";
seats.A2 = "Shalom";
seats["A3"] = "Sandra";

console.log(seats);

// static members
class Rides {
  private static _activeRides: number = 0;
  start() {
    Rides._activeRides++;
  }
  stop() {
    Rides._activeRides--;
  }

  get activeRides() {
    return Rides._activeRides;
  }

  set activeRides(value: number) {
    if (value < 0) throw new Error("Invalid value");
    Rides._activeRides = value;
  }
}

// inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walk");
  }
}

class Student extends Person {
  // the method and attributes of Person have been inherited
  constructor(public studentId: number, firstName: string, lastName: string) {
    // we do not need to add the public keyword to the inherited attricutes
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a Test");
  }
}

let student = new Student(1002, "Zango", "Neville");
console.log(student);
