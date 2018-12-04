
/*
createReadStream으로 파일을 읽고 그 스트림을 전달받아
createWriteStream으로 파일을 쓸 수도 있습니다. 파일 복사와 비슷합니다. 
스트림끼리 연결하는 것을 '파이핑한다' 고 표현합니다. 

*/


const fs = require('fs'); 

const readStream = fs.createReadStream('./.vscode/P01_버퍼와스트림/test02.txt');
const writeStream = fs.createWriteStream('./.vscode/P01_버퍼와스트림/test03.txt'); 
readStream.pipe(writeStream); 

//파일을 복사한다. 