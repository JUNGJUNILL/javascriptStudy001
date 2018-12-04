
const fs = require('fs'); 

const write = fs.createWriteStream('./.vscode/P01_버퍼와스트림/test02.txt');

write.on('finish' , ()=>{
                    //▲콜백함수

    console.log('파일 쓰기 완료'); //파일쓰기가 완료되면 콜백함수가 실행된다. 

}); 

write.write('이 글을 쓴다\n'); 
write.write('한 번 더 씁니다');
write.end(); //write를 종료하겠다. 
             //종료되면 콜백함수 실행된다. 

const readStream = fs.createReadStream('./.vscode/P01_버퍼와스트림/test02.txt',{highWaterMark: 2}); 
const data =[]; 


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