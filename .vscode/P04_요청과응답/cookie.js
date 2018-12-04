const http = require('http'); 

const parseCookies = (cookie='')=>
                    //파라메터 값 : bHideResizeNotice=1; mycookie=test

cookie.split(';'). // ["bHideResizeNotice=1", " mycookie=test"] 이해함 ok

map( v => v.split('=') ). // [ ["bHideResizeNotice", "1"] , [" mycookie", "test"] ]          이애함 ok
                         //                        

map( ( [k,...vs])=> [k,vs.join('=')]  )   //[ ["bHideResizeNotice", "1"] , [" mycookie", "test"] ]   
                                          //현재 이부분은 사용될 여지가 없다. 

.reduce(     (acc,[k,v])=>{ acc[k.trim()] = decodeURIComponent(v); return acc;},    {}   ); // 이해못함NO




//map( v => v.split('=') ) = function (v) { return v.split('=') }



    http.createServer((req,res)=>{
            //이 함수에서는 가장 먼저 req 객체에 담겨 있는 쿠기를 분석한다. 
            //쿠키는 req.headers.cookie 에 담겨있다. 

        const cookies = parseCookies(req.headers.cookie); 
                                    //실제 값 : bHideResizeNotice=1; mycookie=test
        
        res.writeHead(200,{'Set-Cookie':'mycookie=test'});
        //응답 헤더에 쿠키를 기록해야 하므로, res.writeHead 메서드를 사용 
        // 첫 번째 인자 200 : 상태코드, 성공이라는 의미 
        // 두 번째 인자     : 해더의 내용을 입력한다. Set-Cookie는 브라우저한테 다음과 같은 쿠키를 저장하라는 의미 
        //                   실제로 응답을 받은 브라우저는 mycookie=test라는 쿠키를 저장한다. 

     
        res.write(req.headers.cookie+"<=RealCookValue"); 

        res.end('   hELLO COOKIE',req.headers.cookie); 

    })


    .listen(8082,()=>{
      
        console.log('8082번 포트에서 서버 대기 중입니다.'); 


    }); 