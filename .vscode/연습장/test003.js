function Person(name) {  
    this.name = name || "혁준"; 
    console.log(this.name , name);  
}

var test =new Person(); 

console.log(test.name); 