const EventEmitter = require('events'); 

const myEvent = new EventEmitter(); 


myEvent.addListener('event1' , ()=>{

        console.log('이벤트1'); 
}); 

myEvent.on('event2' , ()=>{

        console.log('이벤트2');

});

myEvent.on('event2' , ()=>{

        console.log('이벤트2 추가'); 

}); 
//이벤트 이름과 이벤트 발생 시 콜백을 연결해 준다. 
//이렇게 연결하는 동작을 이벤트 리스닝이라고 부른다.

myEvent.emit('event1'); 
myEvent.emit('event2'); 
//이벤트를 호출해주는 메서드. 



myEvent.once('event3' , ()=>{

    console.log('이벤트3'); 
}); 
//이벤트를 한 번만 실행되는 이벤트이다. 

myEvent.emit('event3'); 
myEvent.emit('event3'); 
//두 번 연속 실행했지만, 콜백은 한번만 실행이된다. 


myEvent.on('event4',()=>{

    console.log('이벤트4'); 

}); 


myEvent.removeAllListeners('event4'); 
myEvent.emit('event4'); 
//removeAllListeners() : 이벤트에 연결된 모든 이벤트 리스너를 제거한다. 
//                       event4가 호출되기 전에 리스너를 제거했으므로, event4의 콜백은 호출되지 않는다. 

const listener = () =>{

    console.log('이벤트5'); 

}; 

myEvent.on('event5'  , listener); 
myEvent.removeAllListeners('event5' , listener); 
myEvent.emit('event5'); 

console.log(myEvent.listenerCount('event2')); 
//현재 리스너가 몇 개 연결되어 있는지 확인한다. 


