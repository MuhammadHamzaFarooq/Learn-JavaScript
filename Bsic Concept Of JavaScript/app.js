 function hidefunction(){
    document.getElementById("hide").innerHTML="My Name Is Hamza Farooq"
}

function newfunction(){
    document.getElementById("show").innerHTML=88+ 773;
}

function toCelcius(f){
  return (5/9)*(f-32);
}

function callfunction(){
    document.getElementById("temp").innerHTML=toCelcius;
}
 var car = {type: "flat",model: "500",colour: "white"}
function objectfunction(){
    document.getElementById("ob").innerHTML="the car type is  "+car.type;
}


let html = "<h1>This is Heading </h1> + <p>This Paragraph </p>";
html = html.concat('this');
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html.indexOf("i"));
console.log(html.lastIndexOf("i")); 
console.log(html.charAt(7));// jo hum nay index dya hay us string may us index par ja kar character lay aye ga
console.log(html.endsWith("this")); // ya check kary gay kay end sting may ya string ya ya nahi or boolean may reuslt return return kray ga 
console.log(html.includes("is")); // ya check kray ga kay string may mojod hay ya nahi 
console.log(html.substring(0,35));// ya string lay karay ga jitni hum range dynge 
console.log(html.slice(0,8)); // ya copy kary ga data
console.log(html.split('')); // ya spce jahn ho ga us ko arry ka element bana kay split karay ga or array object kary ga
console.log(html.replace('this','it'));//ya sirf ak occurence ko replace karta hay sary occrence ko nahi karta 


//template literal topics
const name = "hamza";
let furit1 = 'Orange';
let furit2 = 'Apple';
let myHtml =` Hello ${name}
<h1>this is heading </h1>
<p>Your like ${furit1} and ${furit2}</p>`;
document.body.innerHTML=myHtml;


let marks = [1,233,4,55,6,10,39];
console.log(marks.splice(3,3));//splice ya karta hay ko phel index lay ta hay per element value kay kitnay element wahn say delete karnay han
console.log(marks);
console.log(marks.reverse());

let marks1 =[99,838,63,272,00];
marks= marks.concat(marks1);
console.log(marks);


//function
let FullName = "Harry Poter";

function greeting(name ="jhon",thank="Thank you so much"){
    let mesg = `Heartfelt wishes and sweet text messages play an important part in our relationship with other people.

    Most of us exchange Christmas and New Year greetings as well as birthday and wedding anniversary wishes.
    But there are also many other opportunities to let your family and friends know how much they mean to you.
    
    Bright up their day by sending good morning ${name}quotes, friendship day or happy new month sms, make them laugh with funny quotes , encourage them with get well soon wishes if they are not feeling well, and don‘t forget to wish them good luck for exams or new job!
    ${thank}
    The right words might touch the hearts and make your special ones feel loved and happy.`;
    return mesg;
}

console.log(greeting(FullName,"hello thank your"));


//function in object 
let myObj={
    name:"jhon",
    age: function(){
        return 'GTA'
    }

};

console.log(myObj.age());


// for each loops
let arr=[3,4,56,7,74,345,6];
arr.forEach(function(element){
 console.log(element)
})

let obj ={
    name:"rohan das",
    type:"dangerous progarmmer",
    os: "ubuntu"
}
for(let key in obj){
  console.log(obj[key])
}













