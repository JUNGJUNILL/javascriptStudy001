

//상위 클래스 
function Shape(){
    console.log("부모 생성자 몇번 호출함?"); 
this.x = 0; 
this.y = 0; 


}; 



Shape.prototype.move = function( x,y ){

    this.x +=x;  //this.x = this.x + x
    this.y +=y;  //this.y = this.y + y 
    console.info('shape moved'); 
}

function Rectangle(){

    Shape.call(this); 

}

//Rectangle.prototype = Object.create(Shape.prototype); 
Rectangle.prototype = Shape.prototype;

Rectangle.prototype.constructor = Rectangle;
// -> function Rectangle(){  Shape.call(this);  }


var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'