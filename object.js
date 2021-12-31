let obj1 ={};
let obj2 = new Object();

function print(person){
  console.log(person.name);
  console.log(person.age);
}

let rakhyun = {name:'rakhyun', age: 27};
print(rakhyun);

obj1.key = 'value';
console.log(obj1.key); //출력됨

delete obj1.key;
console.log(obj1.key); //출력안됨

console.log(obj1.key);
console.log(obj1['key']);

function makeObj1(value1, value2){
  return{
    key1: value1,
    key2: value2,
  };
}
let obj3 = makeObj1('value1', 'value2');

function makeObj2(value1, value2){
	this.key1 = value1;
  this.key2 = value2;
}

let obj4 = new makeObj2('value1', 'value2');

console.log(obj4);

//키 있는지 확인
console.log('key' in obj1); //있으면 true 없으면 false


//for..in for..of
for (key in obj){ //객체에 있는 모든 key를 출력
  console.log(key);
}

let array = [1, 2, 3, 4];
for (value of array){ //배열에 있는 모든 value를 출력
  console.log(value);
}

//객체 주소 복사
let user1 = {name: 'abc'};
let user2 = user1;
user2.name = 'def';
console.log(user1); // def로 바껴서 출력

//객체를 복사해서 새로운 객체 생성
let user3 = {};
//user3에 user의 내용이 복사
for (key in user1){ 
  user3[key] = user[key];
}

//Object를 메소드를 활용하여 복사
Object.assign(user4, user); //user4에 user의 내용이 복사