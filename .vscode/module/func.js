const { odd, even} = require('./var'); 

function checkOddOrEven(num){

if(num % 2){
    return odd; 
}else{
    return even; 
}

}

module.exports=checkOddOrEven; 
//exports만 사용시에는 함수를 할 수 없다. 
//exports는 객체만이 속성값을 받을 수 있기 떄문이다. 