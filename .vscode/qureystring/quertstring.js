const url = require('url'); 
const querystring = require('querystring'); 

const parsedUrl =url.parse('https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=312320873'); 
const testUrl   = url.parse('http://localhost:8080/login'); 
//url.parse() : 요청 정보를 리턴하는 함수이다. 

console.log('parsedUrl=>  ', parsedUrl); 
//console.log('testUrl=>  ', testUrl); 

const query = querystring.parse(parsedUrl.query); 
console.log('querystring.parse() : ' , query);
//url의(요청 url중에서 키=값 속성 javascript 객체로 반환) query 부분을 자바스크립트 객체로 분해해줍니다. 

console.log('querystring.stringify() : ' , querystring.stringify(query)); 
//분해된 query 객체를 문자열로 다시 조립해준다. 
