
function Dog(color , name , age,family){

    this.color = color;
    this.name = name; 
    this.age = age; 
    this.family = family;
    
    }; 
    Dog.prototype.family = '시베리안 허스키'; 
 
    Dog.prototype.breed = function(){

        return Dog.prototype.color; 
    }; 

    var hisDog = new Dog("갈색", "콩이", 3,"마트");

    console.log(hisDog.breed(), hisDog.family, hisDog.color); 
    //undefined 


    
function Dog1(){}; 
var testDog = new Dog1(); 

Dog1.prototype.color="red"; 
console.log(testDog.color); 
testDog.color="blue"; 

console.log(testDog.color); 
