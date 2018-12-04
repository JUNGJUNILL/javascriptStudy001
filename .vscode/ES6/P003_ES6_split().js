

const abc = "bHideResizeNotice=1; mycookie=test"; 
console.log(abc.split(';')); 
//["bHideResizeNotice=1", " mycookie=test"]
//해당 문자열 기준으로 나누어 배열화 시켜준다. 

const arrayTest = ["bHideResizeNotice=1", " mycookie=test"]; 

var test= arrayTest.map( v=>v.split('=')); 


console.log('test=>' , test); 