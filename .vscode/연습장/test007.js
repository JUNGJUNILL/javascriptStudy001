function Person(name){
  console.log("부모 생성자가 2번 호출된다."); 
  this.name = name || "자바스크립트"; 
}

Person.prototype.getNames = function(){

        return this.name; 

};

function Human1(name){

}

function Human2(name){
  Person.apply(this,arguments); 
}


var test1 = new Human1("파이썬"); 
console.log(test1.name); 

Human2.prototype = new Person(); //부모 생성자 호출 1
//자식함수(Human2) prototype속성을 부모 함수를 사용하여 
//생성된 객체로 지정했습니다. 

//부모객체의 속성에 대한 참조를 가지는 것이 아닌, 복사본을 통해
//내 것으로 만든다. 동시에 부모객체의 프로토타입 객체에 대한 링크도 참조된다. 
//부모 객체의 프로토타입 객체 멤버도 사용할 수 있다. 
//단점은 부모 생성자를 2번 호출한다. 
//getNames()는 제대로 상속되었지만, name에 대해서는 Human2 객체와 부모 함수를 이용하여 생성한
//객체에도 있다. 



var test2 = new Human2("씨샵"); //부모 생성자 호출 2

console.log(test2.name); 
console.log(test2.getNames());