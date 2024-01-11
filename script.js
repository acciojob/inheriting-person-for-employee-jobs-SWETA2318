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

// Example usage
var person1 = new Person('John', 25);
person1.greet(); // Output: Hello, my name is John, I am 25 years old.

var employee1 = new Employee('Alice', 30, 'Software Engineer');
employee1.greet(); // Output: Hello, my name is Alice, I am 30 years old.
employee1.jobGreet(); // Output: Hello, my name is Alice, I am 30 years old, and my job title is Software Engineer.