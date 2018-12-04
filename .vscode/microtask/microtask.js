//process.nextTick(콜백)
// -> 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선으로 처리하도록 한다. 



setImmediate(()=>{

    console.log('immediate'); 
}); 

process.nextTick(() => {
    console.log('nextTick');
  });

setTimeout(()=>{
    console.log('timeout'); 
},0); 
/*
Note ≣ setImmediate(콜백)과 setTimeout(콜백, 0)

setImmediate(콜백)과 setTimeout(콜백, 0)에 담긴 콜백 함수는 이벤트 루프를 거친 뒤 즉시 실행됩니다. 
둘의 차이점은 무엇일까요? 특수한 경우에 setImmediate는 setTimeout(콜백, 0)보다 먼저 실행됩니다.
파일 시스템 접근, 네트워킹 같은 I/O 작업의 콜백 함수 안에서 타이머를 호출하는 경우입니다.
하지만 setImmediate가 항상 setTimeout(콜백, 0)보다 먼저 호출되는 것은 아니라는 사실만 알아두세요.
헷갈리지 않도록 setTimeout(콜백, 0)은 사용하지 않는 것을 권장합니다.

*/

Promise.resolve().then(()=>console.log('promise')); 

//process.nextTick은 setTimeout보다 먼저 실행됩니다. 
//코드 맨 밑에 promise를 넣은 것은 resolve된 Promise도 nextTick처럼 다른 콜백들보다 우선시되기 때문이다. 
//그래서 process.nextTick과 Promise를 마이크로태스크 라고 따로 구분지어 부릅니다. 


// 마이크로태스크의 재귀 호출

// process.nextTick으로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백 함수보다도 먼저 실행됩니다.
// 그래서 비동기 처리를 할 때 setImmediate보다 process.nextTick을 더 선호하는 개발자도 있습니다.
// 하지만 이런 Microtask를 재귀 호출하게 되면 이벤트 루프는 다른 콜백 함수보다 Microtask를 우선하여 처리하므로 콜백 함수들이 실행되지 않을 수도 있습니다.

