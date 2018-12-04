

var A = function(){

    this.x = function(){

            console.log('hello'); 

    };

}; 

A.x= function(){

    console.log('world'); 

}; 


var B = new A(); 
var C = new A();
//프로토타입이 객체를 만들어내기 위한 원형이라면 Prototype Object는 자기 자신의 분신이며, 
//자신(A)을 원형으로 만들어질 다른 객체(B,C)가 잠조할 프로토타입이 된다. 
//즉, 객체 자신을 이용할 다른객체(B,C)들이 프로토타입으로 사용할 객체가 Prototype Ojbect인 것이다. 

B.x(); 
C.x(); 



console.log('----------------------------------------------------'); 

var A1 = function(){}; 
A1.x = function(){

    console.log('hello'); 

}; 

A1.prototype.x = function(){

    console.log('world'); 

}; 


var B1 = new A1(); 
var C1 = new A1();

B1.x(); 
C1.x(); 



function Dog(color , name , age){

this.color = color;
this.name = name; 
this.age = age; 

}; 


Dog.prototype.family = '시베리안 허스키'; 
Dog.prototype.breed = function(){

    return Dog.prototype.color + " " + this.family; 
            //단일 객체라 prototype이 없다. 
}


var myDog = new Dog("흰색", "마루", 1);
myDog.family = '고릴라'; 
var hisDog = new Dog("갈색", "콩이", 3);
console.log("hisDog.color" , hisDog.color); 
 

console.log("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");
console.log("우리 집 강아지의 품종은 " + myDog.breed() + "입니다.<br>");
console.log("친구네 집 강아지의 품종은 " + hisDog.breed() + "입니다.");




console.log('----------------------------------------------------'); 






function Dog(color){

        color="블루"; 

}; 


Dog.prototype.color="옐로"; 
Dog.color="red"; 

var test = new Dog("정준일"); 
console.log("test.color=>",test.color);
    
    

function Dog1(){

    this.color1="블루"; //this는 강하다... 

}; 


Dog1.prototype.color1="옐로"; 
Dog1.color1="red"; 

var test1 = new Dog1(); 
console.log(test1.color1);
