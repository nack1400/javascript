'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON 객체를 json으로
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

const person = {
  name: 'ABC',
  age: '20',
  birthDate: new Date(),
  job: null,
  eat: function () {
    console.log(`I eat apple`);
  },
};
json =JSON.stringify(person);
console.log(json);

json = JSON.stringify(person, ['name', 'age']);
console.log(json);

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(person);
let obj1 = JSON.parse(json);
console.log(obj1);


//console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());