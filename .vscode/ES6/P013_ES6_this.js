function Person(name, age){

    this.name = name; 
    this.age  = age; 
} 
//생성자로 사용하게 되면....

var jun =new Person("정준일",29); 
//생성된 객체(jun)의


console.log(jun.name , jun.age); 
//맴버변수를 참조하게 된다. 이것은 prototype을 사용해서 정의한 객체의 메소드에서도 동일하다. 


//prototype을 사용해서 정의한 객체의 메소드 
Person.prototype.isJun = function(){

    return this.age <25; 

};
//하지만 this는 기본적으로 전역객체 이므로, 굳이 위와 같이 객체 매소드 
//내부에서 호출하지 않아도 사용할 수 있다.
console.log(jun.isJun());  
console.log(this.jun.isJun()); 