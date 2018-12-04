
//비동기 방식을 유지하되 순서를 유지하고 싶다면? 

const fs = require('fs');

console.log('시작'); 

fs.readFile('./.vscode/redFile/write.txt' , (err, data)=>{


    if(err){
        throw err; 
    }

    console.log('1번' , data.toString()); 


    fs.readFile('./.vscode/redFile/write.txt',(err,data)=>{

        if(err){
            throw err; 
        }

        console.log('2번' , data.toString()); 

        fs.readFile('./.vscode/redFile/write.txt',(err,data)=>{

            if(err){
                throw err; 
            }

            console.log('3번' , data.toString()); 
        });
    });



}); 


console.log('끝'); 

//읽은 파일을 data.toString()으로 변환하는 이유는 data가 버퍼이기 때문이다. 
//버퍼에 대해서 알아보자. 