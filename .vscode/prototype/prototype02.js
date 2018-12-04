function Ultra(){} 


Ultra.prototype.ultraProp = true; 


function Super(){} 

var abc = new Ultra(); 
console.log(abc.ultraProp); 
//prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.. 


function Sub(){} 

Sub.prototype = new Ultra(); 

var test = Sub.prototype; 
console.log('test= > ' , test.ultraProp);

var o = new Sub();
console.log(o.ultraProp);

