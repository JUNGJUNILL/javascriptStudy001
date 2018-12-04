const array1 = [1,2,3,4]; 
const reducer = (accumlator , currentValue) => accumlator + currentValue; 



console.log(array1.reduce(reducer)); 




//5+1+2+3+4
console.log(array1.reduce(reducer,5)); 
                                //▲ 초기값 : 콜백의 첫 번째 호출에서 첫 번째 인수로 사용되는 값 
                                //초기값이 주어지지 않은 경우에는 배열의 첫 번째 요소가 사용된다. 
                                //빈 배열에서 초기값 없이 reduce()를 호출하면 에러가 발생한다. 

                                //초기값이 없으면 [?,1,2,3,4]이 된다는 말과 일맥상통 
                                //(초기값이 주어지지 않으면 reduce()는 인덱스 1부터 시작해 콜백함수를 실행하고.. 라는 말을 바꿔말하면..)


var maxCallBack  = (acc , cur) => Math.max(acc.x , cur.x); 
var maxCallBack2  = (max , cur) => Math.max(max , cur); 


function appendCurrent (previousValue, currentValue) {
            console.log('previousValue=>' , previousValue ,'currentValue=>' , currentValue);
    return previousValue  + currentValue;

    }

var elements = ["abc", "def", 123, 456,'ggg'];
//  [0 ,"abc", "def", 123, 456,'ggg']
var result = elements.reduce(appendCurrent,0);

console.log(typeof result); 
console.log(result);



//객체 배열에서의 값 합산 
var initVal = 0; 
var sum = [{x:1},{x:2},{x:3}].reduce((acc, cur)=> acc + cur.x , initVal); 

console.log(sum); 


//배열로 이우어진 배열의 펼치기 
var flatterned = [ [0,1], [2,3], [4,5] ].reduce(


    (acc , cur)=>( acc.concat(cur)),[999]
                                 

)

console.log(flatterned); // [999,0,1,2,3,4,5]




//객체 내의 값 인스턴스 개수 세기
//(A in B ) B에 A가 있니? 라는 의미이다. 
/*var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function(allNames , name){

        if(name in allNames){

            allNames[name]++; 
            
            
            

        }else{

            allNames[name] = 1;
        }

        return allNames; 

} , {})

console.log(countedNames); 
*/






var arrayObject =function(allNames , name){

    if(name in allNames){
       allNames[name]= allNames[name] +1  
    }else{
        allNames[name] = 1;
    }
    return allNames; 

}
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(arrayObject, {});
console.log('countedNames=>' , countedNames); 


var emptyObject = {};



var testFunction  = function(obj , value){

    obj[value] = 1 

    return obj; 
}

var testValue = testFunction(emptyObject , 'hello'); 
console.log('testValue=>' , testValue); 

//첫 번째 호출시 
//arrayObject 함수의 조건식은 false이므로 
//allNames[name] = 1 이 실행이 된다. 

//그렇게 되면 첫 번째 호출시 반환되는 allNames의 값은
//{Alice : 1} 이 된다. 

//결론적으로 allNames[name] = 1 이 {Alice : 1 }이 됬다는 말인데 
//이게 어떤 문맥으로 Alice와 1이 매핑이 된건지 모르겠다. 

//답변
//해당 객체의 property에 1을 대입하는 것이기 때문에
//당연히 매핑 될 수 밖에 없다. 


 








//첫번 쨰 호출 
//{}      ,  'Alice' 
//allNames,   name
//false 


