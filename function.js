// let print = function(){
//   console.log('print');
// };

// print();

// let printA = print;

// printA();

function calculate(command, a, b){
  switch (command){
    case 'add':
      return a+b;
    case 'sub':
      return a-b;
    case 'div':
      return a/b;
    case 'mul':
      return a*b;
    case 'rem':
      return a%b;
    default:
      throw Error('unknown command!');
  }
}

console.log(calculate('sub',1,2));