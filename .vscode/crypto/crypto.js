// crypto 

//다양한 암호화를 도와주는 모듈 

//단방향 암호화 
//비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화합니다. 
//단방향 암호화란, 복호화 할 수 없는 암호화 방식을 뜻한다. 
//복호화는 암호화된 문자열을 원래 문자열로 되돌려놓는 것을 의미한다. 
//즉, 단방향 암호화는 한 번 암호화하면 원래 문자열을 찾을 수 없다. 

//생각해보면 고객의 비밀번호는 복호화할 필요가 없다. 
//먼저 고객의 비밀번호를 암호화해서 db에 저장한다. 그리고 로그인 할 때마다, 입력받은 비밀번호를 같은 암호화
//알고리즘으로 암호화한 후, 데이터베이스의 비밀번호화 비교하면된다. 원래 비밀번호는 어디에도 저장되지 않고
//암호화된 문자열로 비교하는 것이다. 


const crypto = require('crypto'); 
console.log('base64 :  ' , crypto.createHash('sha512').update('비밀번호').digest('base64')); 
console.log('hex :  ',crypto.createHash('sha512').update('aaa111!!').digest('hex')); 
console.log('base64 :  ',crypto.createHash('sha512').update('aaa111!!').digest('base64')); 




//crypto.createHash('알고리즘명'); 사용할 해시 알고리즘을 넣어준다. (md5, sha1 , sha256 , sha512 등등..)
//update('문자열'); 반환할 문자열을 넣어준다. 
//digest('인코딩'); 인코딩할 알고리즘을 넣어준다.  (base64 , hex , latin1이 주로 사용됨) 






//가끔 nopqrst라는 문자열이 qvew로 변환되어 abcdefgh를 넣었을 때와 똑같은 출력 문자열로 바뀔 때도 있습니다. 
//이런 상황을 출동리 발생했다고 표현합니다. 해킹용 컴퓨터의 역할은 어떠한 문자열이 같은 문자열을 반환하는지 찾아내는 것입니다. 
//여러 입력 문자열이 같은 출력 문자열로 변환될 수 있으므로 비밀번호를 abcdefgh로 설정했어도 nopqrst로 뚫리는 사태가 발생합니다. 

//해킹용 컴퓨터의 성능이 발달함에 따라 기존 해시 알고리즘들이 위협받고 있습니다. 대신 해시 알고리즘도 더 강력하게 진화하고 있습니다. 

//node.js에서 pbkdf2에 대해 ARABOJA


//8 비트 - > 1바이트 
//64비트 - > 8바이트 - > 2의 8승  = 256비트 

crypto.randomBytes(64,(err , buf)=>{
//randomBytes() : salt 값을 만드는 함수 

const salt = buf.toString('base64'); 
console.log('salt : '  , salt); 


crypto.pbkdf2('비밀번호' , salt , 100000, 64 , 'sha512' , (err, key)=>{
//비밀번호 , salt값 , 반복횟수 , 바이트 수 , 알고리즘명 
//->10반번 적용함. 즉, sha512로 반환된 결과값을 다시 sha512로 변환하는 과정을 10만 번 반복하는 것이다. 

    console.log('password  :  ' , key.toString('base64') , 'length : ' , key.length); 

    });



});




const cipher = crypto.createCipher('aes-256-cbc' , '열쇠');  //crypto.createCipher('알고리즘','키'); 
                                                             //알고리즘 사용목록확인 : crypto.getCiphers(); 
let result = cipher.update('정준일' , 'utf8' , 'base64'); 
result +=cipher.final('base64'); 
console.log('암호화 :   ' , result); 

const decipher = crypto.createDecipher('aes-256-cbc' , '열쇠'); 
let result2 = decipher.update(result , 'base64' , 'utf8'); 
result2 +=decipher.final('utf8'); 
console.log('복호화   ' ,  result2); 

console.log('알고리즘 리스트' , crypto.getCiphers() );