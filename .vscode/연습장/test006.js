
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
