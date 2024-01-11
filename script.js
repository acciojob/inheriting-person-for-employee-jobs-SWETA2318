// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    Person.call(this, name, age);

    this.jobTitle = jobTitle;
}

// Inherit the Person prototype in Employee
Employee.prototype = Object.create(Person.prototype);

// Adding a method to Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;