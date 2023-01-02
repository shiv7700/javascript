// object in js 

let person={
    firstName : 'shivang',
    lastName : 'blame',
    'Branch space' : 'it',
    college_name : 'ssvgi',
};

//adding new property
person.laptop = 'rog';

//access object proeprty
console.log(person);
console.log(person.lastName);
console.log(person['lastName']);

console.log(person.age);        //undefined

//changing object property
person.lastName='GGWP';
console.log(person.lastName);

//delete object property
delete person.laptop;

// check if property is there or not 
console.log('average' in person);
console.log('firstName' in person);

console.log(person);

// access object property using loop 
// for in loop 
for(let key in person){
    console.log(key + " = " + person[key]);
}


// methods in object
// object function is called method 
// 4 ways

let rog={
    name : 'rog',
    model : 'i5',
    site : 'flipkart',
    ram : '8gb',
    gpu : 'gtx 1650'
};

//1st way
rog.sayhello = function(){
    console.log("Say hello");
};
rog.sayhello();

//2nd way
function greet(){
    console.log("Greet");
}

rog.sayhello=greet;
rog.sayhello();

//3rd way
let acer={
    name : 'rog',
    model : 'i5',
    sayhello : function(){
        console.log("Hello");
    }
};
// acer.sayhello();

//4th way
let hp={
    name : 'rog',
    model : 'i5',
    sayhello(){
        console.log("Hello");
    }
};

hp.sayhello();

// _this keyword : when object have to access his own property then we use this keyword
let cp={
    name : 'rog',
    model : 'i5',
    sayhello(){
        console.log("Hello this is model "+ this.model +" of rog laptop");
    }
};

cp.sayhello();










