// string
let myName = 'Haris';

// number
let myAge = 22.3;

// boolean
let myGenderIsMale = true;

// assing types
let myRealAge: number;
myRealAge = 22;

// array
let hobbies: any[] = ["Playing guitar", "Gaming"];
hobbies = [100];

// tuples
let address: [string, number] = ["Random St.", 99];

// enum
enum Color {
    Red, // 0
    Green = 100, // 100
    Blue // 2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions -- type can be assigned to the value that will be returned
function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

// void -- doesnt return anything
function sayHello(): void {
    console.log("Hello!");
    
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 3));


// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
userData = {
    name: "Haris",
    age: 22
};

// Complex types

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

// union types
let myRealRealAge: number | string = 27
myRealRealAge = "27";

// check types
let finalValue = "Hello";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
} else if (typeof finalValue == "string") {
    console.log("Final value is a string");  
}

// never
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;     // 12
canBeNull = null;       // Null
let canAlsoBeNull;      // Undefined
canAlsoBeNull;          // Null

let canThisBeAny: any = null;
canThisBeAny = 12;
