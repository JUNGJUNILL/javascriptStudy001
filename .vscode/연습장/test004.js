var o = { x: 15 };
 
function f(message1, message2)
{
    console.log(message1 + (this.x * this.x) + message2);
}
 
function g(object, func)
{           
    // arguments[0] == object
    // arguments[1] == func
     
     console.log("arguments.length=>",arguments.length); 
    var args = []; // empty array
    // copy all other arguments we want to "pass through" 
    for(var i = 2; i < arguments.length; i++)
    {
        args.push(arguments[i]);
    }
 
    func.apply(object, args);
}
 
g(o, f, "The value of x squared = ", ". Wow!");