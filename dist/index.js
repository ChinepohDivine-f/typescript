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
//# sourceMappingURL=index.js.map