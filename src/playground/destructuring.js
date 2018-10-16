//object 

console.log('destructuring')

const person = {
    name: 'Jake',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 83
    }
};

const { name = 'Anonymous', age } = person;
const {city, temp: temperature} = person.location;
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

if (city && temperature) {
    console.log(`${city} ${temperature}`);
}
console.log(`----------------------`);
//Array

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city2, state='New York', zip] = address;

console.log(` ${street} ${zip}`);