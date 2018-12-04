const fs = require('fs'); 
console.log('현재 스크립트의 절대경로' , __filename); //현재 스크립트의 절대경로 
console.log('현재 스크립트의 저장 폴터' , __dirname);  //현재 스크립트의 저장 폴터

fs.readFile('./.vscode/redFile/readFile.txt' , (err ,data) =>{

if(err)  {
    
    throw err;
}
c
onsole.log('buff' , data); 
//버퍼라는 형식으로 제공된다. 버퍼는 사람이 읽을 수 있는 형식이 아니므로, toString()으로 문자열로 변환한다.


console.log(data.toString()); 
});


fs.writeFile('./.vscode/redFile/write.txt', '글이 입력됩니다.',(err)=>{
    if(err){
        throw err; 
    }
    fs.readFile('./.vscode/redFile/write.txt',(err1,data1)=>{

        if(err1){
            throw err1; 
        }
        console.log(data1.toString()); 

    });
});

