var array = [1,4,9,16]; 

const map1 = array.map( x=> x*2 ); 
                   //function(x){ return x*2; }

console.log(map1); 




var kvArray = [
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value: 30}
             ]; 




var test =kvArray.map(function(obj){


    var rObj={}; 
    rObj[obj.key]  = obj.value; 
    return rObj; 


}); 

console.log(test); 