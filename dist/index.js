"use strict";
var sales = 1234567;
console.log(sales);
var numbers = [];
numbers[0] = 1;
numbers[1] = 3;
numbers.forEach(function (n) { return console.log(n * 0.61); });
var array = [1, "Pete"];
var mySize = 2;
console.log(mySize);
function puppy(puppyName) {
    return "Hello Mr " + puppyName;
}
console.log(puppy("Snuckles"));
var employee = {
    id: 1,
    name: "Paul",
    work: "",
    retire: function (date) {
        console.log(date);
    },
};
employee.work = "UI UX designer";
console.log(employee);
var anotherEmployee = {
    id: 2,
    name: "Peter",
    work: "Gardener",
    retire: function (date) {
        console.log(date);
    },
};
function kgToLbs(wieght) {
    if (typeof wieght === "number")
        return wieght * 2.2;
    else
        return parseInt(wieght) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
var textBox = {
    drag: function () { },
    resize: function () { },
};
var quantity = 50;
var anotherQuantity = 100;
var numberOfBooks = 100;
var width = "cm";
console.log(width);
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
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
var log = null;
log === null || log === void 0 ? void 0 : log("a");
var speed = null;
var ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function render(document) {
    if (typeof document === "string")
        document.toUpperCase();
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
console.log("Hello World!");
console.log("hwhwh");
var Account = (function () {
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
console.log(account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map