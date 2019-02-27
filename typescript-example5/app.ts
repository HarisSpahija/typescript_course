class Person2 {
    name: string;
    lastName: string;
    private type: string;
    protected age: number = 22;

    constructor(name: string, lastName: string, public username: string) {
        this.name = name;
        this.lastName = lastName
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const haris = new Person2("Haris", "Spahija", "Beedle");
console.log(haris)
haris.printAge();
// person.setType("Cool guy") // Won't work with private methods

// Inheritance
class Sophie extends Person2 {
    // name = "Sophie"

    constructor(lastName: string, username: string) {
        super("Sophietje", lastName, username);
        this.age = 20;
    }

}
const sophie = new Sophie("Sophie", "SStumm98");
console.log(sophie);




// Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default"
        }
    }
}

let plant = new Plant();
console.log(plant.species); // "Default" (due default at interface)
plant.species = "AB";
console.log(plant.species); // "Default" (due failing if statement)
plant.species = "Green Plant";
console.log(plant.species); // "Green Plant" (due passing if statement)

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14; // Static can always be used outside of the class
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(2))

// Abstract Classes 
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One')
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One'); --- Not possible due to the constructor being private. No instances after can be created
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; --- Cant reassign after name being set readonly
