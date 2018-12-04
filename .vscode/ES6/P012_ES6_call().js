var person11 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var person22 = {

    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}


var x = person11.fullName.call(person1); 
console.log(x); 


var y = person22.fullName.call(person2,'부천','한국'); 
console.log(y); 
//바인드 함수와 비슷하다. 



var obj = {

    string : 'zero', 
    yell   : function(){
        console.log("this.string=>", this.string);
    }
}; 

var obj2 = {

string : 'what?'
}; 

obj.yell(); 
obj.yell.call(obj2); 
//call의 첫번째 파라메터는 this를 대체 하는 것이다. 
//다른 객체의 함수를 자기 것 마냥 사용 할 수 있다. 