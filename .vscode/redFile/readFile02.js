const fs = require('fs'); 

console.log('시작'); 


fs.readFile('./.vscode/redFile/write.txt' , (err, data)=>{

    if(err){
        throw err; 
    }
    console.log('1번' , data.toString()); 


});

fs.readFile('./.vscode/redFile/write.txt',(err,data)=>{

    if(err){
        throw err; 
    }

    console.log('2번' , data.toString()); 

}); 

fs.readFile('./.vscode/redFile/write.txt',(err,data)=>{

    if(err){
        throw err; 
    }

    console.log('3번' , data.toString()); 

}); 

console.log('끝'); 


//비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어간다. 
//따라서 파일 읽기 요청만 세 번을 보내고 console.log('끝')을 찍는다. 
//나중에 다시 메인 스레드에 알림을 줍니다. 메인 스레드는 그제서야 등록된 콜백 함수를 실행한다. 




console.log('-----------------------------------------------------------'); 

console.log('시작'); 

let data  = fs.readFileSync('./.vscode/redFile/write.txt'); 
            //싱크로 파일을 읽을 것이다 : 즉, 동기, 블로킹 방식 

console.log('1번' , data.toString()); 

data =  fs.readFileSync('./.vscode/redFile/write.txt'); 
console.log('2번' , data.toString()); 


data =  fs.readFileSync('./.vscode/redFile/write.txt'); 
console.log('3번' , data.toString()); 

console.log('끝'); 

//readFileSync 메서드를 사용하면 요청이 수백 개 이상이 들어왔을 때, 성능에 문제가 생깁니다. 
//Sync 메서드를 사용할 때는 이전 작업이 완료되어야 다음작업을 진행할 수 있습니다. 
//즉, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못하고 대기하고 있어야 하는 것입니다. 
//메인 스레드가 일을 하지 않고 노는 시간이 생기기 땜분에 비효율적입니다. 비동이 메서드는 백그라운드가 작업을 하는 와중에도 
//다음 작업을 처리할 수 있었습니다. 




