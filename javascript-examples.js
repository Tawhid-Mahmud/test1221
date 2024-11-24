// Basic variable declarations
const name = "Alice";
let age = 25;
var oldStyle = "not recommended"; // var is older syntax

// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const multiply = (a, b) => a * b;

// Working with arrays
const fruits = ["apple", "banana", "orange"];
fruits.push("mango");

// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }
}

// Async/await example
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Event handling example
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
});

// Example usage
console.log(greet("World")); // Hello, World!
console.log(multiply(4, 5)); // 20
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evenNumbers); // [2, 4]
console.log(sum); // 15

const dog = new Dog("Rex");
dog.speak(); // Rex barks!

console.log(person.fullName()); // John Doe
