'use strict';

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name}: hello!`);
  }
}

const rakhyun = new Person('rakhyun', 28);
console.log(rakhyun.name);
console.log(rakhyun.age);
rakhyun.speak();