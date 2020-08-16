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




//        ========================= Chapter4 (VARIABLE NAMES: LEGAL & ILLEGAL ) ================= 

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
document.write("variable name can only contain. numbers $ and _. For example: $any_1stVariable "+"<br> <br>");
document.write("variable must being with a letter.$  or_ .For example: $Some_name or name "+"<br> <br> <br>");
document.write("variable names case sensitive"+"<br> <br>");
document.write("variabel names should not JS keywords"+"<br> <br>");



//        ========================= Chapter5 (MATH EXPRESSIONS) =================

//Q1 -1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1=29;
var num2=30;
var sum =num1+num2;
document.write("sum of "+num1+"and "+num2+"is "+sum+"<br> <br>");

//Q2 -2. Repeat task1 for subtraction, multiplication, division & modulus.
var sub = num1-num2;
var multi = num1*num2;
var divi=num1/num2;
var reminder=num1%num2;
document.write("subraction of "+num1+"and "+num2+"is "+sub+"<br> <br>");
document.write("multiplication of "+num1+"and "+num2+"is "+multi+"<br> <br>");
document.write("division of "+num1+"and "+num2+"is "+divi+"<br> <br>");
document.write("reminder of "+num1+"and "+num2+"is "+reminder+"<br> <br>");

// //Q3 - 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var x;
document.write("Value after declaration is "+x+"<br> <br>");
x=5;
document.write("Initial value "+x+"<br> <br>");
x++;

document.write("Value after increment is "+x+"<br> <br>");
x=x+7;
document.write("Value after the addition is "+x+"<br> <br>");
x=x-1;
document.write("Value after Decrement is "+x+"<br> <br>");
x=x%x;
document.write("The remainder is "+x+"<br> <br>");

//Q4 -4. Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets to a movie
var ticket=600;
var totalticket=5;
var totalcost=ticket*totalticket;
document.write("Total cost to buy  "+ticket+" ticket to a movie is "+totalcost+"PKR"+"<br> <br>");

//Q5 -5. Write a script to display multiplication table of any number in your browser. 
var tableNo = 4;
document.write("Table of "+tableNo+"<br> <br>");
for(var i=1; i<=10;i++){
    document.write(tableNo +" "+"x"+" "+i +" "+"="+" "+(tableNo*i) +"<br> ");
}
document.write("<br> <br> <br>");

//Q6 -6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var tempC;
var TempF;
var C=25;
var F=77;
//formulas;
//c=(f-32)*5/9
//f=(c*9/5)+32

tempC=(F-32)*(5/9);
tempF=(C*9/5)+32;

document.write(C+"&#8451;"+" is "+F+"&#8457;"+"<br>");
F=70;
C=21.111111111111111;
document.write(F+"&#8457;"+" is "+C+"&#8451;"+"<br>");

// //Q7 -Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// // the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<h1>Shopping Cart</h1>"+"<br>");
var price1 =650;
var price2=100;
var quantity1=3;
var quantity2=7;
var shipping=100;
var totalOrderCost=(price1*quantity1)+(price2*quantity2)+shipping;
document.write("Price of item 1 is "+price1+"<br>");
document.write("Quantity of item 1 is "+quantity1+"<br>");
document.write("Price of item 2 is "+price2+"<br>");
document.write("Quantity of item 2 is "+quantity2+"<br>");
document.write("Shippin Charges "+shipping+"<br>");
document.write("Total cost of your order is "+totalOrderCost+"<br>");

//