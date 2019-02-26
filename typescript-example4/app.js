"use strict";
// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 20; -- Is not possible due to "const" usage
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arroww Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friendName) {
    if (friendName === void 0) { friendName = "Sophie"; }
    return console.log("Hello, " + friendName);
};
greetFriend("Conan");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!", start);
};
countdown(5);
// Rest & Spead
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers)); // "..." Selects all values from array
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    return args;
}
console.log(makeArray("Haris", 1, 2));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
// const [hobby1, hobby2] = (myHobbies as string[]) -- In case myHobbies isnt assigned to a type
console.log(hobby1, hobby2);
var userData = { userName: "Haris", age: 22 };
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// Template Literals
var userName = "Haris";
var greeting = "This is a heading!\nHello, I am " + userName + "\nThis is so cool!";
console.log(greeting);
