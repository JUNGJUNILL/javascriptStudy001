function Shape(){

  this.x = 0; 
  this.y = 0; 
  
  
  }; 
  

  function Rectangle(){
  
      Shape.call(this); 
  
  }

function Tree(name) {
    this.name = name;
  }
  
  var theTree = new Tree('Redwood');
  theTree.constructor = Rectangle; 
  console.log('theTree.constructor is ==> ' + theTree.constructor);