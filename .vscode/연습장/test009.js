var person = {  
  type : "인간",
  getType : function(){
      return this.type;
  },
  getName : function(){
      return this.name;
  }
};



var jonh = Object.create(person); 
jonh.name="존"; 
