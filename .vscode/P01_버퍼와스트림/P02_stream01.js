

/* 
readFile() 방식의 버퍼가 편리하기는 하지만, 문제점도 있따. 만약 용량이 100MB인 파일이 있으면 
파일을 읽을 때 메모리에 100MB의 버퍼를 만들어야 한다. 

이 작업을 동시에 열 개만 해도 1GB에 달하는 메모리가 사용된다. 
특히 서버 같이 몇 명이 이용할지 모르는 환경에서는 메모리 문제가 발생할 수 있다. 

또한, 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가므로 파일 읽기, 쓰기 등의 조작을
연달아 할 때 매번 전체 용량을 버퍼로 처리해야 다음 단계로 넘어갈 수 있다. 

그래서 버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내는 방식이 등장함
예를 들어 1MB를 만든 후 100MB 파일을 백 번에 걸쳐 보내는 것이다. 메모리는 1MB로 100MB 파일을 전송할 수 있다. 
이를 편리하게 만든 것이 스트림이다. 
*/


const fs = require('fs'); 

const readStream = fs.createReadStream('./.vscode/P01_버퍼와스트림/test.txt', {highWaterMark: 2}); 
                                                                            //▲바이트 단위 1바이트 = 8비트 알파벳 1바이트, 한글 2바이트 
                                                                            //default는 64KB라고 한다.(1024KB는 1ME이겠지~)
const data = []; 

//readStream은 주로 이벤트 리스너를 붙여서 사용한다.
//data, end, error 이벤트를 사용한다. 
readStream.on('data' , (chunck)=>{

            data.push(chunck); 
            console.log('data : ' , chunck , chunck.length , chunck.toString()); 

});


readStream.on('end' , ()=>{

            console.log('end : ' , Buffer.concat(data).toString()); 

});



readStream.on('error', (err)=>{


            console.log('error : '  , err);

});