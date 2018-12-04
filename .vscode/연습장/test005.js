function adder(base /*, n2, ... */) {
    base = Number(base);
    console.log(arguments.length); 
    for (var i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
  }
  console.log(adder("11","22")); 