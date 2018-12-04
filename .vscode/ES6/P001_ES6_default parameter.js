//좋은 사이트 https://jsdev.kr/t/es6/2944 


function multiply2(a,b){

   return  a* b; 
}

console.log(multiply2(5,2)); //10 
console.log(multiply2(5));   //NaN


console.log('//-----------------------------------');
//-----------------------------------



function multiply3(a,b){

    b = (typeof b !== 'undefined') ? b : 1; 
         //b가 undefined면 1을 반환해라 
         //내부적인 구현이 이런식으로 되어있다... 
    return a*b;

}
console.log('multiply3(999)=>' , multiply3(999)); 


//default parameter의 진정한 의미.. 
function multiply(a, b=2){



    return a*b; 
}

console.log(multiply(5,2)); 
console.log(multiply(100));




console.log('//-----------------------------------');
//-----------------------------------




function test(a=1){

    test();          // 'number' (num is set to 1)
    test(undefined); // 'number' (num is set to 1 too)
    
    // test with other falsy values:
    test('');        // 'string' (num is set to '')
    test(null);      // 'object' (num is set to null)


}


console.log('//-----------------------------------');
//-----------------------------------


function append(value, array=[]){

array.push(value); 
return array; 
}
console.log(append(1)); //1
console.log(append(2)); //2



console.log('//-----------------------------------');
//-----------------------------------



function callSomething(thing = Something()) {

    return thing; 
}

var numberOfTimeCalled =0; 

function Something(){

    numberOfTimeCalled= numberOfTimeCalled+1; 
    return numberOfTimeCalled; 

}


console.log('callSomething()=>' , callSomething());
console.log('callSomething()=>' , callSomething());



console.log('//-----------------------------------');
//-----------------------------------


function greet(name, greeting, message = greeting + ' ' + name){

    return [name,greeting, message];
}

console.log('greet()=>',greet('David' , 'HELLO'));   // ["David", "Hi", "Hi David"]
console.log('greet()=>',greet('David' , 'HELLO','HappyBirthDay'));  // ["David", "Hi", "Happy Birthday!"]




console.log('//-----------------------------------');
//-----------------------------------



function f( [x,y] = [1,2], {z:z} = {z:3} ){ //비구조화 할당.. 

    let test =x+y+z; 
    console.log('test' , test);  
       return test; 

}
f();