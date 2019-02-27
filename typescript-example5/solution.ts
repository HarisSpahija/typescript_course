// Exercise 1
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Tooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
abstract class baseObject {
    public width: number = 0;
    public length: number = 0;    
}

class Rectangle extends baseObject {
    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    };
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3
class Person {
    private _firstName: string = "";

    public get firstName(): string {
        return this._firstName;
    }


    public set firstName(v: string) {
        if (v.length > 3) {
            this._firstName = v;
        }
        else {
            this._firstName = "";
        }
    }
}
let person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);