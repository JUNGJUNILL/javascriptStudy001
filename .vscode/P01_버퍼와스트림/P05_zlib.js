


const zlib = require('zlib'); 
const fs = require('fs'); 

const readStream = fs.createReadStream('./.vscode/P01_버퍼와스트림/test03.txt');
//파일을 읽고

const zlibStream = zlib.createGzip(); 
//zip파일을 만들기 위해 준비하여 

const writeStream =fs.createWriteStream('./.vscode/P01_버퍼와스트림/test03.txt.zip'); 
readStream.pipe(zlibStream).pipe(writeStream); 



//파일을 읽어서 
//압축할 준비를 해서 
//압축바일로 읽는다. 