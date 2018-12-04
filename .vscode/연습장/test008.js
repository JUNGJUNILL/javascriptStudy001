function Person(name) {  
  console.log("부모의 생성자는 한번도 호출이 안됨"); 
  this.name = name || "혁준";
}

Person.prototype.getName = function(){  
  return this.name;
};

function Korean(name){  
  this.name = name;
}    
Korean.prototype = Person.prototype;
//자식 함수의 prototype 속성을 부모 함수의 prototype 속성이 참조하는 객체로 설정했다. 
//부모 함수로 생성한 객체가 없고(Korean.prototype = new Person, 이 부분이 없다.)
//부모 함수의 prototype 객체로 링크가 참조되는 것을 볼 수 있다. 

var kor1 = new Korean("지수");  
//자식 함수를 통해 생성된 객체는 부모 함수를 통해 생성된 객체를 거치치 않고
//부모 함수의 프로토타입 객체를 부모로 지정하여 객체를 생성한다. 
//부모 함수의 내용을 상속받지 못하므로, 상속받으려는 부분을 부모 함수의 프로토타입 객체에 작성해야 한다. 
console.log(kor1.getName());  // 지수 