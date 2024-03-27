var sales = 1234567;
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
var numbers = []; // declare an empty number array
numbers[0] = 1;
numbers[1] = 3;
numbers.forEach(function (n) { return console.log(n * 0.61); });
// tuples
// these are fixed size arrays with well defined data types
var array = [1, "Pete"];
// since small has been set to one, the index of the next element will the incriment
var mySize = 2 /* Medium */;
console.log(mySize);
// functions
function puppy(puppyName) {
    return "Hello Mr " + puppyName;
}
console.log(puppy("Snuckles"));
// objects in ts
var employee = {
    id: 1,
    name: "Paul",
    work: "",
    retire: function (date) {
        console.log(date);
    }
};
// its not advisable to use null
employee.work = "UI UX designer";
console.log(employee);
var anotherEmployee = {
    id: 2,
    name: "Peter",
    work: "Gardener",
    retire: function (date) {
        console.log(date);
    }
};
/// union types
function kgToLbs(wieght) {
    // union type
    // Narrowing
    if (typeof wieght === "number")
        return wieght * 2.2;
    else
        return parseInt(wieght) * 2.2;
}
// with the union type its good to check if argument is a number or a string
// so as to perform the right options
kgToLbs(10);
kgToLbs("10");
var textBox = {
    drag: function () { },
    resize: function () { }
};
/// literal types
// with this we can create varaible which are like constants
// and can only be set to the target
var quantity = 50; // can only be set to 50
// applying the union operator we can make the code even better
var anotherQuantity = 100; // it can be either 50 or 100
var numberOfBooks = 100; // a literal type
var width = "cm";
console.log(width);
// nullable variables
function greet(name) {
    if (name)
        console.log("Hello " + name);
    else
        console.log("Hello!");
}
greet("Chinepoh");
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
// optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
// optional element access operator
// customers?.[0]
// optional call
var log = null;
log === null || log === void 0 ? void 0 : log("a"); // executed only when log is referencing an actual function
// the nullish coaelscing operator
var speed = null;
var ride = {
    // falsy (undefined, null, '', false, 0)
    speed: speed !== null && speed !== void 0 ? speed : 30
};
// type assertion
var phone = document.getElementById("phone"); // assert the the HTMLInputElement
// HTMLElement
// HTMLInputElement
phone.value; // the phone object can now acces the properties of HTMLInputElement
// there is not type convention when using the as keyword in ts
var anotherPhone = document.getElementById("tablet"); // same as using the as keyword
anotherPhone.value;
function render(document) {
    // Narrowing
    if (typeof document === "string")
        document.toUpperCase();
    // if (document instanceof Book)
    //   document.
}
// the never type
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    // setting the return type to never
    while (true) {
        // read a message from a queue
    }
}
// reject("..."); // code under this will not be executed becuase the return type is never
console.log("Hello World!"); // this will never be executed
console.log("hwhwh");
/// Classes and interfaces in type script
var Account = /** @class */ (function () {
    function Account(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this.balance += amount;
    };
    return Account;
}());
var account = new Account(1, 'Sam', 0);
account.deposit(100);
console.log(account.balance);
// console.log(account);
