
/*
let foo ='bar1'; 
console.log(foo); 


if(true){

let foo='bar2'; 
console.log(foo); 

}

//if문 밖의 foo와 if문 안의 foo은 다른 변수이다. 
//if문 안의 foo는 if문이 닫히는 시점에서 유효범위가 끝난다. 

console.log(foo); 
*/

/*
let foo = 'bar1'; 
console.log(foo); 
if(true){
    console.log(foo); 
    foo = 'bar2'; 
    console.log(foo); 
}

console.log(foo); 
*/


let foo='bar1'; 
if(true){

    
    console.log(foo); 
    let foo='bar2';
    //어떤 변수가 호출되었을 때 블록 안에 같은 이름의 변수가 없으면 
    //상위 블록에서 선언된 이름의 변수를 호출한다. 
    //하지만, 블록 안에서 let이나 const로 같은 이름으로 변수 선언이 있었다면 그 이름의 변수는 
    //변수가 선언되기 이전까지 그 블록안에서는 정의되지 않은 변수로 간주됨
    //(말이 참 어렵지만 곱씹어서 생각해보면 된다.)

}
console.log(foo); 
