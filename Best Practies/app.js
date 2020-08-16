// Object Methods
// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.

var person = {  firstname: 'John',lastname:"jack",age:23,eyecolour: 'black',fullname:function(){return this.firstname,this.lastname;}}

// The this Keyword
// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.

// Read more about the this keyword at JS this Keyword.


//creating function for display date

function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

//varibale string object 
var x = "jhon";
var y = new String ("Jhon");
console.log(typeof(x)); // return string 
console.log(typeof(y));// object

// Don't create strings as objects. It slows down execution speed.
// The new keyword complicates the code. This can produce some unexpected results:


var x1 = new String("John");             
var y1 = new String("John");

// (x === y) is false because x and y are different objects

// Note the difference between (x==y) and (x===y).
// Comparing two JavaScript objects will always return false.


// Searching for a String in a String
// The search() method searches a string for a specified value and returns the position of the match:

let str = "Pakistan is best country in world.";
console.log(str.search("world")); 



var a = 10;
var b =20;
document.getElementById("demo1").innerHTML = "The reuslt is "+(a+b);