var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, lastName, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
        this.lastName = lastName;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Haris", "Spahija", "Beedle");
console.log(person);
person.printAge();
// person.setType("Cool guy") // Won't work with private methods
// Inheritance
var Sophie = /** @class */ (function (_super) {
    __extends(Sophie, _super);
    // name = "Sophie"
    function Sophie(lastName, username) {
        var _this = _super.call(this, "Sophietje", lastName, username) || this;
        _this.age = 20;
        return _this;
    }
    return Sophie;
}(Person));
var sophie = new Sophie("Sophie", "SStumm98");
console.log(sophie);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // "Default" (due default at interface)
plant.species = "AB";
console.log(plant.species); // "Default" (due failing if statement)
plant.species = "Green Plant";
console.log(plant.species); // "Green Plant" (due passing if statement)
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // Static can always be used outside of the class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(2));
// Abstract Classes 
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
