const buffer =Buffer.from('가'); //문자열을 버퍼로 바꿀 수 있다. 
console.log('from() : ' , buffer); 
console.log('length : ',buffer.length); 
console.log('toString() : ' , buffer.toString()); 

const array = [Buffer.from('띄엄') , Buffer.from('띄엄') , Buffer.from('띄어쓰기')]; 
const buffer2 = Buffer.concat(array); 
console.log('buffer2',buffer2); 
console.log('buffer2 : ' , buffer2.toString()); 
console.log('length : ' , buffer2.length);  

const buffer3 = Buffer.alloc(5); 
console.log('alloc() : ' , buffer3); //빈 버퍼를 생성한다. 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성된다. 

