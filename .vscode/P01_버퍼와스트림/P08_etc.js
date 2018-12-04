

const fs=require('fs'); 

fs.copyFile('./.vscode/P01_버퍼와스트림/test02.txt' , './.vscode/P01_버퍼와스트림/testcopy.txt', (err)=>{

    if(err){
        return console.error(err); 
    }

    console.log('복사 완료'); 
}); 