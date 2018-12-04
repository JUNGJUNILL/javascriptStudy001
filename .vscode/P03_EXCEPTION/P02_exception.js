const fs = require('fs'); 

setInterval(()=>{

    fs.unlink('./abcddd.js',(err)=>{

        if(err){
            console.log(err); 
          //throw err;  예외를 던져버리면 프로세스가 종료된다. 
                }

    }); 


},1000); 

