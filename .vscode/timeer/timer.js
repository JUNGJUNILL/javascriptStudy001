const timeout = setTimeout(()=>{
        console.log('1.5초 후 실행'); 
}, 1500)


const interval = setInterval(()=>{
    console.log('1초마다 실행'); 
},1000)

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.');
},3000);


// setTimeout(()=>{
// clearTimeout(timeout2); 
// clearInterval(interval); 

// }); 

setTimeout(()=>{
      clearTimeout(interval);  
      console.log('정지!');  
},9000);

setImmediate(()=>{
    console.log('즉시 실행한다.'); 
});


/*
• clearTimeout(아이디): setTimeout을 취소합니다.

• clearInterval(아이디): setInterval을 취소합니다.

• clearImmediate(아이디): setImmediate를 취소합니다.
    ->setTimeout(콜백 , 0 ); 은 가급적 사용하지 맙시다. node에서 
    
 */