let age=23;
let mern_stack='yes';

//if else condition
if(age>=23){
    console.log('you are developer');
} else{
    console.log('no you are not developer');
} 



if(age>=23 && mern_stack=='yes' ){
    console.log('you are developer');
} else{
    console.log('no you are not developer');
}

//if else if condition
let developer='mern';
let branch='it';

if(developer='mern' && branch !='it'){
    console.log('go down');
} else if(developer='mern'){
    console.log('yes here');
} else {
    console.log('no not here');
}

// if else nested
let age_for_vote=18;
let voter_id='yes';

if(age_for_vote>=18){
    if(voter_id='yes'){
        console.log('yes you can vote');
    } else{
        console.log('no you can not vote');
    }
} else{
    console.log('you can not vote');
}

// tenary operator

/*
let user_loggedin='yes';

if(user_loggedin='yes'){
    document.write('Login');
} else {
    document.write('Log out');
}
*/

let user_loggedin='yes';

let option = user_loggedin=='yes' ? "logout" : "logged in";
document.write(option);


// nullish operator

let no_definition;

console.log(no_definition ?? `yes it's defined`);

// switch

// if input= 1 , 'yes' , 'y'        output= continue...
// if input= 0 , 'no' , 'n'         output= end...

let input;
input='';

if(input === 1){
    document.write('continue');
} else if(input === 'yes'){
    document.write('continue');
} else if(input ==='y' ){
    document.write('continue');
} else if(input === 0){
    document.write('end');
} else if(input === 'no'){
    document.write('end');
} else if(input === 'n'){
    document.write('end');
} else{
    document.write(' wrong input');
}

// switch comparison do strict compaerison with === only

let input_1;
input_1="";

switch (input_1) {
    case 1:
        document.write("continue");    
        break;
    case "yes":
        document.write("continue");
        break;
    case "y":
        document.write("continue");
        break;
    case 0:
        document.write("end");
        break;
    case "no":
        document.write("end");
        break;
    case "n":
        document.write("end");  
        break;         
    default:
        document.write("wrong input");
        break;      //not important to write break
}

// above code in short 

switch (input_1) {
    case 1:
    case "yes":
    case "y":
        document.write("continue");
        break;
    case 0:
    case "no":
    case "n":
        document.write("end");  
        break;         
    default:
        document.write("wrong input");
        break;      //not important to write break
}




