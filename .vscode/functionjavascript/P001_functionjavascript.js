function _curry2(fn){

    return function(a,b){


        if(arguments.length == 2) {return fn(a,b); }
        
        return function(b){


            return fn(a,b); 
        }

    }


}
sdfsdfsdf

var add1  = _curry2(function(a,b){
		console.log(b,a); 
		return a +b  ; 
		
	});
	console.log("_curry2()");
	console.log(add1(10,10)); 
	console.log(add1(10)(20)); 
