const { odd, even } = require('./var');
const checkNumber = require('./func');
//global.require의 생략형 
//global이 전역 객체이기 때문 

//원래 consoel.log할 때 
//global.console.log 로 하는게 올바른 방법이라고 하네 


function checkStringOddOrEven(str){

if(str.length % 2){
return odd; 

}
return even; 

}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));