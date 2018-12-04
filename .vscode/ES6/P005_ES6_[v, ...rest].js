
/*
const names = ['Bob', 'Fred', 'Benedict'];

const [cat, ...rest] = names;

console.log(cat); // Bob
console.log(rest); // ["Fred", "Benedict"]
*/



/*
const names = {cat: 'Bob', dog: 'Fred', alligator: 'Benedict'};

const {cat, dog, alligator} = names;

console.log(cat); // Bob
console.log(dog); // Fred
console.log(alligator); // Benedict
*/


/*
const names = {cat: 'Bob', dog: 'Fred', alligator: 'Benedict'};

const {cat: newCat, dog: newDog, alligator: newAlligator} = names;

console.log(newCat); // Bob
console.log(newDog); // Fred
console.log(newAlligator); // Benedict
*/
//https://alligator.io/js/object-array-destructuring-es2015/



const names = ['Bob', 'Fred', '=', 'Benedict'];

const test = names.map( ([obj1, ...rest])=>[obj1,rest.join('=')]   ); 
        
console.log(test); 