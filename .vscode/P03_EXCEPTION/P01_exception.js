//노드는 스레드가 하나뿐이므로 그 하나를 소중히 보호해야 합니다. 
//하나뿐인 스레드가 에러로 인해 멈춘다는 것은 전체 서버가 멈춘다는 뜻과 같습니다. 



setInterval(()=>{

    console.log('시작'); 
    
    try{

        throw new Error('서버를 고장내주마'); 

    }catch(err){

        console.log(err); 

    }


},1000); 