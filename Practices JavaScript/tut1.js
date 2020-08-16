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
x=x+1;

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

// //Q-8 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write("<h1>Marks Sheet</h1>"+"<br>");
var totalMrak =980;
var obtainedMrak =804;
var percentage = obtainedMrak/totalMrak*100;
document.write("Total Marks : "+totalMrak+"<br>");
document.write("Obtained Marks : "+obtainedMrak+"<br>");
document.write("Percentage : "+percentage+"%"+"<br>");


// //Q9 -9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var SaudiRiyalInPKR=28;
var SaudiRiyal=25;
var dolllarInPKR =104.80;
var $=10;
var totalCurrency=(SaudiRiyal*SaudiRiyalInPKR)+(dolllarInPKR*$);
document.write("Total Currency in PKR : "+totalCurrency+"<br>");

// //Q9 -10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number=19;
number +=5;
number *=10;
number /= 2;

//Q10 -11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values

document.write("<h1>Age Calculator</h1>"+"<br>");
var currentYear = 2016
var birthYear = 1992;
var currentAge= currentYear-birthYear;
document.write("Current Year : "+currentYear+"<br>");
document.write("Brith Year : "+birthYear+"<br>");
document.write("Your Age is : "+currentAge+"<br>");


// //12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h1>The Geometrizer</h1>"+"<br>");
var radius =20;
var circumference = 2 *3.142*radius;
var area = 3.142*(Math.sqrt(radius));
document.write("Radius Of Circle : "+radius+"<br>");
document.write("The circumference is : "+circumference+"<br>");
document.write("The area is : "+area+"<br>");



// //Q13 - 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br>");
var snack ="chocolate chip";
var currentAge =15;
var maxAge=65;
var amountSnackPerDay =3;
var remainingLife = 65-15;
var remainingDays=remainingLife*365;
var resOfLife=remainingDays*amountSnackPerDay;
document.write("You will need  "+resOfLife+" "+snack+" to last you until the ripe old age of "  +maxAge+"<br>");


//        ========================= Chapter6-9 (MATH EXPRESSIONS ) =================

// //Q1 -1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var num= 10;
document.write("Result :"+"<br>");
document.write("The value of a is :" +num +"<br>");
document.write("----------------------------------"+"<br>");

++num;
document.write("The value of ++a is :" +num +"<br>");
document.write("Now the value of a is :" +num +"<br><br>");

num++;
document.write("The value of a++ is :" +num +"<br>");
document.write("Now the value of a is :" +num +"<br><br>");



--num;
document.write("The value of --a is :" +num +"<br>");
document.write("Now the value of a is :" +num +"<br><br>");

num--;
document.write("The value of a-- is :" +num +"<br>");
document.write("Now the value of a is :" +num +"<br><br>");


//Q2 -2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

var a =2,b=1;
var result= --a - --b + ++b + b--;
a--;
--a - --b 
--a - --b + ++b ;
--a - --b + ++b + b--;


document.write("a is :" +a +"<br>")
document.write("b is :" +b +"<br>")
document.write("result is :" +result +"<br>")


//Q3 -3. Write a program that takes input a name from user & greet the user.
var name=prompt("Enter your name");
alert(name);

// //Q5 -5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var tableNum=+prompt("please enter a number for multiplcation table");
var defaultNum=5;
for( var j=0;j<=1;j++){
    if(j=1&& tableNum===tableNum){
        for(var k=1; k<=10;k++){
    
            document.write(defaultNum +" "+"x"+" "+k +" "+"="+" "+(defaultNum*k) +"<br> ");
        }
    }
    for(var r=1; r<=10;r++){
    
    document.write(tableNum +" "+"x"+" "+r +" "+"="+" "+(tableNum*r) +"<br> ");
}

}

document.write("<br> <br> <br>");


// Q6 -6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var eng=54;
var urdu=48;
var math =54;
var marks=100;
var percentage1=(eng/marks*100);
var percentage2=(urdu/marks*100);
var percentage3=(math/marks*100);
document.write("<h4>Subject     Total Marks   Obtained Marks    Percentage <h4> "+"<br><br>");
document.write("English   "+marks+"   "+eng+"     "+percentage1+"%" +"<br><br>");
document.write("Math   "+marks+"   "+math+"     "+percentage3+"%"+"<br><br>");
document.write("Urdu   "+marks+"   "+urdu+"     "+percentage2+"%"+"<br><br>");
