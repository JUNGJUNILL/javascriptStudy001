
const http = require('http'); 
const fs   = require('fs'); 
const url  = require('url'); 
const qs   = require('querystring'); 




const parseCookies = (cookie='')=>
                    //파라메터 값 : bHideResizeNotice=1; mycookie=test

cookie.split(';'). // ["bHideResizeNotice=1", " mycookie=test"] 이해함 ok

map( v => v.split('=') ). // [ ["bHideResizeNotice", "1"] , [" mycookie", "test"] ]          이애함 ok
                         //                        

map( ( [k,...vs])=> [k,vs.join('=')]  )   //[ ["bHideResizeNotice", "1"] , [" mycookie", "test"] ]   
                                          //현재 이부분은 사용될 여지가 없다. 

.reduce(     (acc,[k,v])=>{ acc[k.trim()] = decodeURIComponent(v); return acc;},    {}   ); // 이해못함NO

const session ={}; 

http.createServer((req,res)=>{
    const cookies = parseCookies(req.headers.cookie); 

    
    if(req.url.startsWith('/login')){
       
    const { query } = url.parse(req.url); 
    //요청 주소값에 대한 '키=값' 정보를 받아서 query라는 객체에 저장한다. 
    //(요청 url의 정보가 들어 있는 객체를 반환한다.)
    // Url {protocol: "https:", slashes: true, auth: null, host: "kin.naver.com", port: null, …}
    // ▲이런 형식으로 이루어진 객체) 
    
    
    const { name } = qs.parse(query); 
    //키=값&키=값 형태로 다시 저장 시킨다. 

    const expires = new Date(); 
    expires.setMinutes(expires.getMinutes() + 5); 
    //현재 시간에 5분을 더한다.

    const randomInt = +new Date(); 
    // 1970년 1월 1일 부터 지금까지 계속 흐른 시간을 
    // 밀리초로 반환해준다. 
    session[randomInt] = {

        name, 
        expires,


    }; 


    
    res.writeHead(302,{

            Location:'/', 
            'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
            //이 부분은 해더 부분에 옵션을 설정하는 부분이다. 
            //Path=`url` : 쿠키가 전송될 URL을 특정할 수 있다. 기본값은 '/' 이고 이 경우 모든 URL에서 쿠기를 전송 할 수 있다. 
            //HttpOnly   : 설정 시 자바스크립트에서 쿠키에 접근할 수 없다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋다. 
            //Secure     : HTTPS 프로토콜일 경우에만 쿠키가 전송된다. 
            //Expires    : 쿠키 만료 시간을 설정 해 줄 수 있다. 
    }); 
    res.end(); 


    }else if(cookies.session      &&      session[cookies.session].expires > new Date()){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'}); 
        res.end(`${session[cookies.session].name}님 안녕하세요`); 


    }else{
        fs.readFile('./.vscode/P06_요청과응답/server4.html',(err,data)=>{
            if(err){
                throw err
            }
            res.end(data); 

        }); 


    }
        

}).listen(8088,()=>{

    console.log('8088번 포트에서 서버 대기 중입니다.'); 
}); 