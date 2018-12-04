

//const os = require('os'); 
//시스템 프로그래밍 할 때 말고 웹 노드에서는 잘 안씀 

const path = require('path'); 
/*const string = __filename; //이 페이지의 js파일 

console.log(path.sep); 
console.log(path.delimiter); 
console.log(path.dirname(string)); //이 페이지의 js파일의 위치 
console.log(path.basename(string)); 

 const string2 = path.dirname(string) + path.sep + path.basename(string); 
 console.log(string2); 

console.log(path.parse(__filename));  

console.log(path.format({
    dir : 'C:\\users\\dala1',
    name:'os',
    ext :'.js'
}));
console.log(path.normalize('C://users\\\\dala1\\\\os.js')); 
*/
console.log(path.isAbsolute('C:\\Users\\dala1\\Desktop\\test\\.vscode\\os\\os.js')); 

console.log('dirname' + __dirname); 

console.log('__dirname = > ' + __dirname); 
console.log('path.relative() = > ', path.relative('C:\\uesrs\\dala1\\test\\os.js' ,'\\dala1') ); 
//path.relative(기준경로,비교경로) : 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다. 

console.log('path.join() = > ' , path.join(__dirname,'..','..','\\users','.','\\dala1' ));
//여러 인자를 하나로 넣으면 하나의 경로로 합쳐준다. 















//상대경로는 기본적으로 비교대상이 두개가 필요하다. 
//하나의 파일이 있는 장소에서 다른 파일이 어디에 존재하는지가 중점적으로 궁금한겁니다. 

//  / : 최상위 경로를 의미한다. 
// ./ : 현재 폴터를 의미한다. 
// ../: 상위 디렉토리를 의미한다. 