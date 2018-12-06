/*
http://www.nextree.co.kr/p7323/
function Person(){}

//함수의 맴버로 prototype 속성이 내부적으로 존재함, 그것을 Person의 prototype객체라고 한다.  
//Person prototype 객체 
//prototype 객체의 맴버인 constructor가 존재하고.. 이 constructor 속성은 Person 함수를 참조한다. 


var joon = new Person(); 
var sooji = new Person(); 

//Person 함수의 prototype 속성이 참조하는 prototype 객체는 new라는 연산자와 
//Person 함수를 통해 생성된 모든 객체의 원형이 되는 객체입니다. 

//javascript에서 기본 데이터 타입인 boolean , number, string 그리고 특별한 값인 null, undefined빼고는 
//모두 객체이다. 사용자가 정의한 함수도 객체이고, new라는 연산자를 통해 생성된 것도 객체이다. 
//객체 안에는 proto(비표준) 속성이 있다. 이 속성은 객체가 만들어지기 위해 사용된 원형인 프로토타입 객체를 숨은 
//링크로 참조하는 역할을 한다. 

Person.prototype.getType = function(){

    return "인간"; 
}
//prototype 속성을 이용하여 멤버를 추가함. 
//prototype 객체에 getType()이라는 함수를 추가하면 멤버를 추가하기 전에 
//생성된 객체에서도 추가된 맴버를 사용할 수 있다. 


console.log(joon.getType()); //인간
console.log(sooji.getType()); //인간
console.log("-----------------------------------");

joon.getType = function(){

        return "사람"; 
}
//생성된 객체를 이용하여 prototype 객체의 멤버를 수정하면 prototype객체에 있는 멤버를
//수정하는 것이 아니라 자신의 객체에 멤버를 추가하는 것입니다. 

//prototype 객체는 새로운 객체가 생성되기 위한 원형이 되는 객체이다. 
//같은 원형으로 생성된 객체가 공통으로 참조하는 공간이다. prototype 객체의 멤버를 읽는 경우에는 
//객체 또는 함수의 prototype 속성을 통해 접근할 수 있습니다. 하지만 추가,수정,삭제는 함수의
//prototype 속성을 통해 접근해야 한다. 


console.log(joon.getType());  //인간
console.log(sooji.getType()); //사람
console.log("-----------------------------------");

*/
function Person(name) {  
    console.log(typeof name); 
    this.name = name || "혁준"; 
}

Person.prototype.getName = function(){  
    return this.name;
};

function Korean(name){}  
Korean.prototype = new Person();
//부모 객체의 속성과 부모 객체의 프로토타입 속성을 모두 물려 받게 된다. 

function Korean(name){  
    Person.apply(this, arguments);
    //일단        ▲요 this는 Korean이고 ... 
    //부모 객체인 Person 함수 영역의 this를 Korean 함수안의 this로 바인딩하고... 
    //이것은 부모의 속성을 자식 함수안에 모두 복사한다. 
    //단점은, 부모객체의 this로 된 멤버들만 물려받게 되는 단점이 있다. 
    //그래서 부모객체의 프로토타입 객체의 맴버들을 물려 받지 못한다. 

}

var kor1 = new Korean();  
console.log(kor1.getName());  // 혁준

var kor2 = new Korean("지수");  
console.log(kor2.getName());  // 혁준  
//부모 생성자에 인자를 넘겨주지 않았기 때문에.. 


var x = 10; 
var o = { x: 15}; 

function fff(args){

    console.log(args); 
    console.log(this.x); 

}
fff("sex"); 

fff.apply(o,["쎾쓰"]); 