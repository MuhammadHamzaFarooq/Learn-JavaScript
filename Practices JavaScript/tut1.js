//Day  One  16/8/202


//        ========================= Chapter1 (ALERTS) ================= 

//Q1- 1. Write a script to greet your website visitor using JS alert box.
alert("Assalam O Aliakum");

//Q2 - 2. Write a script to display following message on your web page:
alert("Please enter valid password");

//Q3- 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land .... \n Happy Coding");

//Q4 - 4. Write a script to display following messages in sequence:
// a
alert("Welcome to JS Land");
// b
alert("Happy Coding \n Prevent this page additional dialogs");

//Q4 - 5. Generate the following message through browser’s developer console:
alert("Hello.. I can run JS through my web browser's console ");

//Q6 - 6. Make use of alerts in your new/existing HTML & CSS project

// Q7 - 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


//        ========================= Chapter2 (VARIABLES FOR STRINGS ) ================= 

//Q1 - 1. Declare a variable called username.
var username ;
 
//Q2 -2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Full Name";

// //Q3 - 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var titledMessage;
titledMessage="Hello World";
alert(titledMessage);

//Q4 - 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name = "Jhone Doe";
var age = "15 year old";
var education ="Certified Moblile Application Development";
alert(name);
alert(age);
alert(education);

//Q5 -5. Write a script to display the following alert using one JS variable:
alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

//Q6 -6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email ="example@example.com";
alert("Your email is "+email);

//Q7 - Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book ="A smater way to learn JavaScript";
alert(book);

//Q8 - 8. Write a script to display this in browser through JS
document.write("Yah ! I can write HTML content through JavaScript");

//9. Store following string in a variable and show in alert and browser through JS
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")


//                        ========================= Chapter3 (VARIABLES FOR NUMBERS ) =========================

//Q1 -1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 21;
alert(age);

//Q2 -2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visitor = 14 ;
alert("You have visited this site "+ visitor+" times");


//Q3 - 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1990;
document.write("My birthday year is "+birthYear);
document.write("Date type of my ddeclard variable number");

// //4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name = "Jhon Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write(name+" ordered "+productTitle+" on XYZ Clothing store");




//        ========================= Chapter1 (VARIABLE NAMES: LEGAL & ILLEGAL ) ================= 

//Q1 -1. Declare 3 variables in one statement.
var x,y,z;

//Q2 -2. Declare 5 legal & 5 illegal variable names.
var _,$,$word,_word,Pak;
// var 1ha,#haj,1x,3word;


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<h1> Rules for naming JS variables</h2> <br> <br>" );


document.write("variable name can only contain. numbers $")

