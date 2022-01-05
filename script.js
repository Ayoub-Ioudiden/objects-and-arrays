//Object
const person = {
    name: "Joopie",
    age: 26,
    evaluations: [7, 10, 9]
};

console.log(person);

console.log(person.name);
console.log(person['name']);

console.log(person.age);
console.log(person['age']);

console.log(person.evaluations);


//Array

const selectedColors = ['green', 'blue', 'red'];
console.log(selectedColors);

console.log(selectedColors.length);

console.log(selectedColors[0]);

console.log(selectedColors[2]);

console.log(selectedColors.push('yellow'));

console.log(selectedColors.push(5));

console.log(selectedColors.push({ greeting: "hi, i am an object" }));

console.log(selectedColors[5]);

