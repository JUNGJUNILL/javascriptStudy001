const fs = require('fs'); 


fs.access('./folder' , fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK , (err) =>{
//access('경로','옵션','콜백')
//폴더나 파일에 접근할 수 있는지를 체크함 
//두 번째 인자로 상수들을 넣었습니다, F_OK : 파일 존재여부 , R_OK : 읽기 권한여부 , W_OK 쓰기 권한 여부 체크
//파일, 폴더가 없을 때의 에러 코드는 ENOENT 이다. 
    if(err){
        if(err.code ==='ENOENT'){
            console.log('폴더 없음'); 
                fs.mkdir('./folder',(err)=>{
                //폴더를 만드는 메서드 , 이미 폴더가 있으면 에러가 발생하므로, access() 메서드를 호출해서 확인 하는 것이 중요하다. 

                    if(err){
                        throw err;
                    }

                    console.log('폴더 만들기 성공'); 
                    fs.open('./folder/file.js','w',(err,fd)=>{
                    //파일의 아이디(fd변수)를 가져오는 메서드, 만약 파일이 없으면 파일을 생성한 뒤 그 아이디를 가져온다. 
                    //가져온 아이디를 사용해 fs.read() , fs.write()로 읽거나 쓸 수 있다. 
                    // w : 쓰기  , R : 읽기 , a : 추가 
                        if(err){
                            throw err; 
                        }
                        console.log('빈 파일 만들기 성공' , fd); 

                        fs.rename('./folder/file.js','./folder/newfile.js',(err)=>{
                        //파일의 이름을 바꾸는 메서드 
                            if(err){
                                throw err; 
                            }
                            console.log('이름 바꾸기 성공'); 
                        });//end of rename()
                    });// end of open()
                });//end of mkdir()
            }else{
                throw err;
            }
        }else{
            console.log('이미 폴더 있음'); 
        }

}); 





fs.open('./folder/file.js','w',(err,fd)=>{
    //파일의 아이디(fd변수)를 가져오는 메서드, 만약 파일이 없으면 파일을 생성한 뒤 그 아이디를 가져온다. 
    //가져온 아이디를 사용해 fs.read() , fs.write()로 읽거나 쓸 수 있다. 
    // w : 쓰기  , R : 읽기 , a : 추가 
        if(err){
            throw err; 
        }
        console.log('빈 파일 만들기 성공' , fd); 

        fs.rename('./folder/file.js','./folder/newfile.js',(err)=>{
        //파일의 이름을 바꾸는 메서드 
            if(err){
                throw err; 
            }
            console.log('이름 바꾸기 성공'); 
        });//end of rename()
    });// end of open()










    const write = fs.createWriteStream('./folder/newfile.js');

    write.on('finish' , ()=>{
                        //▲콜백함수
    
        console.log('파일 쓰기 완료'); //파일쓰기가 완료되면 콜백함수가 실행된다. 
    
    }); 
    
    write.write('이 글을 쓴다\n'); 
    write.write('한 번 더 씁니다');
    write.end(); //write를 종료하겠다. 
                 //종료되면 콜백함수 실행된다. 




















/*
createReadStream으로 파일을 읽고 그 스트림을 전달받아
createWriteStream으로 파일을 쓸 수도 있습니다. 파일 복사와 비슷합니다. 
스트림끼리 연결하는 것을 '파이핑한다' 고 표현합니다. 

*/