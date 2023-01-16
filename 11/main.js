//built in object
// math object
console.log(Math.PI);

let x=Math.round(2.7);
console.log(x);

let square=Math.sqrt(2);
console.log(square);

let b=Math.ceil(2.2);
console.log(b);

let c=Math.trunc(4.2);
console.log(c);

let d=Math.pow(2,10);
console.log(d);

let e=Math.min(10,50,60,89,65,56,56,-2);
console.log(e);

//random number
let random=Math.floor(Math.random()*10)+1;
console.log(random);

let ran=Math.floor(Math.random()*(25-15))+15;
console.log(ran);

function getRandom(max,min){
    let ran=Math.floor(Math.random()*(max-min))+15;     //+1 to include upper and lower limit
    return ran;
}
console.log(getRandom(200,0));

// date object 

//store date and time of your browser at that time
let dateNow= new Date();
console.log(dateNow);
console.log(typeof(dateNow));

//7 parameters in date
//11 is december 
let dateAtThatTime= new Date(2019,11,15,10,35,40,50);
console.log(dateAtThatTime);

let errorInDate= new Date(2018);
console.log(errorInDate);

let dateAsString= new Date("december 19,2022 11:32:59");
console.log(dateAsString);

dateAtThatTime.setFullYear(2023);
dateAtThatTime.setTime(20);
dateAtThatTime.setMinutes(45);

console.log(dateAtThatTime.getTime());
console.log(dateAtThatTime.getMonth());
console.log(dateAtThatTime.getDate());
console.log(dateAtThatTime.getDay());

dateAtThatTime.setDate(dateAtThatTime.getDate()+50);

//compare two dates 
let date1=new Date();
let date2=new Date("june 13,2023 12:00:00")

if(date1>date2){
    console.log("present");
} else {
    console.log("future");
}

//create object using new keyword
let newKeyword=new Object();
newKeyword.added="added this property";
console.log(newKeyword);

console.log(typeof(newKeyword));

