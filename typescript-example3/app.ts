let myName: string = "Haris";
let myAge: number = 22;
let anything; // Automatically set to any
anything = 12; // Allowed

// myName = "Haris Spahija";

function controlMe(isTrue: boolean) {
    let result: number; 
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}