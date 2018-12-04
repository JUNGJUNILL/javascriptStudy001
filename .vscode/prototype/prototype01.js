var a = function(){

    this.x = function(){

        console.log('hello'); 

    }

}; 


a.x =function(){

console.log('world');
};
//this는 강력하다.


var B = new a(); 
var C = new a(); 

    
B.x(); 
C.x(); 


var a =  function(){}; 


a.x = function(){

    console.log('world'); 
}
a.x();

a.prototype.x = function(){ console.log('sex'); }
//a.prototype.x 만 생성된 객체.x로 접근이 가능해요~ 

var B1 =new a(); 

B1.x(); 
