
//비동기처리 
//자바스크립트의 비동기 처리란 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고
//다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미한다. 

//비동기 처리의 가장 흔한 사례는 제이쿼리의 ajax입니다. 제이쿼리로 실제 웹 서비스를 개발할 때 
//ajax 통신을 빼놓을 수가 없다. 보통 화면에 표시할 이미지나 데이터를 서버에서 불러와 표시해야 하는데, 
//이때, ajax 통신으로 해당 데이터를 서버로부터 가져올 수 있기 떄문이다. 

/*function getData() {
	var tableData;
	$.get('https://domain.com/products/1', function (response) {
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined
*/

//undefined인 이유는 데이터를 요청하고 받아올 때까지 기다려주지 않고 다음 코드인 return tableData;를 
//실행했기 떄문입니다. 따라서, getData()의 결과 값을 초기 값을 설정하지 않은 tableData의 값 undefined를 출력한다. 

//이렇게 특정 로직의 실행이 끝날 떄까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리이다. 
//자바스크립트에서 비동기 처리가 필요한 이유를 생각해보면, 화면에서 서버로 데이터를 요청했을 때 서버가 언제
//그 요청에 대한 응답을 줄지도 모르는데 마냥 다른 코드를 실행 안하고 기다릴 수 없기 때문입니다. 


// #1
console.log('Hello');
// #2
setTimeout(function () {
	console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');

//순서가 Hello , Hello Again , Bye 순으로 실행됨 ... 이게 비동기 방식임... 

/*
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function (response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function (tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
*/





//promise는 자바스크립트 비동기 처리에 사용되는 객체이다. 

var condition = true; 

const promise = new Promise((resolve,reject)=>{

	if(condition){
		resolve('성공'); 
	}else{
		reject('실패'); 
	}
	
}); 

promise
.then((message) => {
  console.log(message); // 성공(resolve)한 경우 실행
})
.catch((error) => {
  console.error(error); // 실패(reject)한 경우 실행
});

//new Promise로 프로미스를 생성할 수 있으며, 안에 resolve와 reject를 매개변수로 갖는 콜백 함수를 넣어줍니다. 
//이렇게 만든 promise 변수에 then 과 catch 메서드를 붙일 수 있습니다. 프로미스 내부에서 resolve가 호출되면 then이 실행되고 
//reject가 실행되면 catch가 실행된다. 

//resolve와 reject에 넣어준 인자는 각각 then과 catch의 매개변수에서 받을 수 있다. 


promise
  .then((message) => {
    return new Promise((resolve, reject) => {

      resolve(message);
    });
  })
  .then((message2) => {
    console.log('message2 = >' + message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
  	condition = false; 
	reject(error);  //이런식으로 예외를 던져서 처리 할 수 있구나.. 
    console.log('message3 = >' + message3);
  })
  .catch((error) => {
    console.error('에러에러=>' + error);
  });



//프로미스를 여러 개 한번에 실행할 수 있는 방법이 있다. 

const promise1 = new Promise.resolve('성공1');
const promise2 = new Promise.resolve('성공2');

Promise.all([promise1,promise2])
.then((result)=>{
	console.log(result); 
})
.catch((error)=>{
	console.err(error); 
});





