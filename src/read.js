// 1. Javascript is a dynamic language. So no types
const name = "Adrian Cuadros";
let age = 32;

// 2. Short function declaration
const saySomething = (something) => {
  console.log(`You said: ${something}`);
}

saySomething("Hi!");

// 3. Javascript Objects
const fruit = {
  name: 'Apple',
  color: 'red'
};
console.log(`${fruit.name} (${fruit.color})`);

// 4. Arrays and array functions
const fruits = [
  { name: 'Apple', color: 'red' },
  { name: 'Orange', color: 'orange' },
  { name: 'Lemon', color: 'green' }
];

fruits.forEach((fruit) => {
  console.log(fruit.name);
});

let firstGreenFruit = fruits.find((fruit) => {
  return fruit.color === 'green';
});
console.log(firstGreenFruit.name);

// 5. Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

promise.then(() => {
  saySomething("Ready!");
}, () => {
  saySomething("Oh no!");
});

// 6. Libraries
import axios from 'axios';

axios.get('https://www.reservamos.mx/api/v1/cities.json?prefetch=true').then((cities) => {
  console.log(`La primera ciudad: ${cities.data[0].name}`);
}, () => {
  console.log("Algo salio mal");
});
