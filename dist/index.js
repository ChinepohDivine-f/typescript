"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function Account(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    };
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("INvalid value");
            this._balance = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var account = new Account(1, "Sam", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);
var SeatAssignment = (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seats = new SeatAssignment();
seats.A1 = "chinepoh";
seats.A2 = "Shalom";
seats["A3"] = "Sandra";
console.log(seats);
var Rides = (function () {
    function Rides() {
    }
    Rides.prototype.start = function () {
        Rides._activeRides++;
    };
    Rides.prototype.stop = function () {
        Rides._activeRides--;
    };
    Object.defineProperty(Rides.prototype, "activeRides", {
        get: function () {
            return Rides._activeRides;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Invalid value");
            Rides._activeRides = value;
        },
        enumerable: false,
        configurable: true
    });
    Rides._activeRides = 0;
    return Rides;
}());
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.walk = function () {
        console.log("Walk");
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(studentId, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.takeTest = function () {
        console.log("Taking a Test");
    };
    return Student;
}(Person));
var student = new Student(1002, "Zango", "Neville");
console.log(student);
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Teacher.prototype, "fullName", {
        get: function () {
            return "Professor " + this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
var teacher = new Teacher("Nogd", "Sofamy");
console.log(teacher.fullName);
printNames([student, teacher]);
function printNames(people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        console.log(person.fullName);
    }
}
var Shape = (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.render = function () {
        {
            console.log("Rendering a Circle");
        }
    };
    return Circle;
}(Shape));
var circle = new Circle(5, 'purple');
circle.render();
//# sourceMappingURL=index.js.map