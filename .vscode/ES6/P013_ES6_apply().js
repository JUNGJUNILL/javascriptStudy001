https://odetocode.com/blogs/scott/archive/2007/07/05/function-apply-and-function-call-in-javascript.aspx

o1 = {val1:1, val2:2, val3:3}; 
o2 = {val11:11, val22:22, val33:33};

function sum(){

    var _sum = 0; 
    for(name in this){
        _sum = _sum + this[name]; 
    }

    return _sum; 

}

console.log(sum.apply(o1)); 



var Person = {

    fullName : function(){
        return this.firstName + " : " + this.lastName; 
    }

}

var Person1 = {

    firstName:"준", 
    lastName :"일"

}

console.log(Person.fullName.apply(Person1)); 



//apply(this, array); array는 해당 함수.apply 시 
//해당 함수의 파라메터 값이 된다. 
var o = { x: 15}; 

function f(a,b){

        console.log(a + (this.x * this.x) + b); 

}

function fff(object,func){

var args=[]; 
for(var i=2; i< arguments.length; i++){
    
    args.push(arguments[i]); 
    //arguments[2] , arguments[3]
    console.log("arguments[i] = >" , arguments[i]); 

}   

    func.apply(object,args); 
}

fff(o, f, "The value of x squared = ", ". Wow!");

//fff(o,  ->  func.apply(object, 로 인해 
//01
//function f의 this.x가 15가 되었고. 

//02
//arguments[1] = > The value of x squared = 
//arguments[2] = > . Wow!
//f(a,b)의 의미는 
//args[1] = a = The value of x squared 
//args[2] = b = . Wow! 
//apply에서 받은 배열의 인자가 f(a,b) 각각의 파라메터가 된다. 

/* apply 이해가 안될 때 다시 해봐라
var object1 = {a:2 , b:4 , c:6}; 


function sum(a,b,c){
  console.log("a = >" , a);  
  console.log("b = >" , b);
  console.log("c = >" , c);
  console.log("this.a + this.b + this.c = >" ,this.a + this.b + this.c); 
  console.log(a+b+c +this.a + this.b + this.c); 
}


function fff(object,func){


  var array = []; 
  for( var i=2; i< arguments.length; i++){
      array.push(arguments[i]); 
      console.log("arguments["+i+"] = >" , arguments[i]); 
  }


  func.apply(object,array); 
}


fff(object1,sum,1,3,5); 

*/