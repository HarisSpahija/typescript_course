// let & const
console.log("LET & CONST")
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels)
// maxLevels = 20; -- Is not possible due to "const" usage

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable)

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(10, 3))

const greet = () => {
    console.log("Hello")
}
greet();

const greetFriend = (friendName: string = "Sophie") => console.log("Hello, " + friendName);
greetFriend("Conan")

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    while (start> 0) {
        console.log(start)
        start--;
    }
    console.log("Done!", start);
}
countdown(5);

// Rest & Spead
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)) // "..." Selects all values from array

function makeArray(name: string, ...args: number[]) {  // "..." Selects all values into one array
    console.log(name);
    return args;
}
console.log(makeArray("Haris", 1, 2));


// Destructuring
console.log("DESTRUCTURING");
const myHobbies: string[] = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;

// const [hobby1, hobby2] = (myHobbies as string[]) -- In case myHobbies isnt assigned to a type
console.log(hobby1, hobby2)

const userData: {userName: string, age: number} = { userName: "Haris", age: 22};
const {userName: myName, age: myAge} = userData
console.log(myName, myAge);

// Template Literals
const userName = "Haris"
const greeting = `This is a heading!
Hello, I am ${userName}
This is so cool!`;
console.log(greeting);

