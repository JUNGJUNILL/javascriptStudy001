const a ='hello'; 
const b = 'world'; 

const A = require('./globalA');



console.log(a);
console.log(b);
console.log(A(a,b)); 


// global.message ='안녕하세요';
// console.log(A());