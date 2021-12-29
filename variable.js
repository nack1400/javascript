// 1. Use Strict
'use strict';

//2. Variable
//let (added in ES6)
{
  let name = 'rakhyun';
  console.log(name);
  name = 'hello';
  console.log(name);
}

//var는 쓰지마라....
//var hoisting 호이스팅 : 어디에 선언했는지에 관계 없이 맨 위로 올려주는 것
//var는 블럭을 무시함...
//변수를 괄호 안에 선언해도 어디서나 보이는 것, 유연하나, 선언안한것도 막나옴
age = 4;
var age;

//그러니까 let을 쓰자....


//3. Constants
//한번 선언되면 바꿀 수 없는 것
//왠만하면 안바뀌게 선언하면 좋음, 보안상의 이유

const num = 3; //바꿀 수 없음

//4. Variable types
//값을 자동적으로 형지정 후 저장

