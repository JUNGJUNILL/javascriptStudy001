const url = require('url'); 

const URL = url.URL; 

//WHATWG방식 
const myUrl = new URL('https://www.naver.com:443'); //url 모듈 안에 URL 생성자가 있다. 이 생성자에 주소를 넣어 객체로 만들면 
                                                    //주소가 부분별로 정리된다. 이 방식이 WHATWG의 url이다. WHATWG에만 있는 
                                                    //username , password, origin, searchParams 속성이 존재한다. 

                                                    //노드의 url 형식을 꼭사용해야 하는 경우는, 주소가 host 부분 없이 pathname부분만
                                                    //오는 경우 (/book/bookList.aspx 와 같은..) , WHATWG 방식은 이 주소를 처리 할 수 없다. 

                                                    //WHATWG방식은 search 부분을 통해 key=value 값을 얻어 올 수 있다. 
console.log('new URL : ',myUrl); 
console.log('url.format() : ' + url.format(myUrl)); 
