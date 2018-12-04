function Person(){}

Person.prototype.eyes = "2"; 
Person.prototype.nose = "1"; 

var kim = new Person(); 
console.log(kim.eyes); 
var park = new Person(); 

kim.eyes="9"; 
console.log(kim.eyes); 

