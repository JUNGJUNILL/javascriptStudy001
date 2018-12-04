var arr = ['a','b','c']; 
console.log(Object.keys(arr)); 

var obj = { 02 : 'a', 12: 'b', 22: 'c' };
console.log(Object.keys(obj)); // console:  ["2", "12", "22"]


var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']   
                                 //키의 정렬은 random이다. 

var myObj = Object.create({},{

    getFoo : {
        value : function(){ return this.foo; }
    }

}); 

