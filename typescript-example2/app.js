"use strict";
// string
var myName = 'Haris';
// number
var myAge = 22.3;
// boolean
var myGenderIsMale = true;
// assing types
var myRealAge;
myRealAge = 22;
// array
var hobbies = ["Playing guitar", "Gaming"];
hobbies = [100];
// tuples
var address = ["Random St.", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions -- type can be assigned to the value that will be returned
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void -- doesnt return anything
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
userData = {
    name: "Haris",
    age: 22
};
// Complex types
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = "Hello";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
else if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12; // 12
canBeNull = null; // Null
var canAlsoBeNull; // Undefined
canAlsoBeNull; // Null
var canThisBeAny = null;
canThisBeAny = 12;
