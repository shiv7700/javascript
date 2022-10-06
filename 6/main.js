// break : after program see break it will break the loop and come out of the loop
// The break statement "jumps out" of a loop.
for(let count=1; count<=10; count++){
    if(count==5){
        break;
    }
    document.write(count);
    document.write('<br>');
}

// continue : continue dekhte he next loop mein send kr dega
// The continue statement "jumps over" one iteration in the loop.

for(let count_c=1; count_c<=10; count_c++){
    if(count_c==5){
        continue;
    }
    document.write(count_c);
    document.write('<br>');
}


// nested loop

for(let count_n=1; count_n<=10; count_n++){
    document.write(count_n);
    document.write('<br>');

    for(let countn=1; countn<3; countn++){
        document.write('shivang');
        document.write('<br>');
    }
}

/*
// using break and continue in nested loop
for(let count_n=1; count_n<=10; count_n++){
    document.write(count_n);
    document.write('<br>');

    for(let countn=1; countn<3; countn++){
        if(count_n==3){
            break;
        }
        document.write('shivang');
        document.write('<br>');
    }
}
*/

// naming loop names

/*
outer_loop : for(let count_n1=1; count_n1<=10; count_n1++){
    document.write(count_n1);
    document.write('<br>');

    for(let countn2=1; countn2<3; countn2++){
        if(count_n1==3){
            break;
        }
        document.write('shivang');
        document.write('<br>');
    }
}
*/


alert("welcome bro");
prompt("how was your experience");

let data_of_user=prompt("how was your experience" , 20);

document.write(data_of_user);

if(data_of_user != null){
    document.write(`your answer was $(data_of_user)`);
} else {
    document.write('blank');
}

let response = confirm ("are you okay my friend?"); 

if(response){
    document.write('true');
} else {
    document.write('false');
}


//automatic conversion of js

let type = '5' + null;
console.log(type);       // output '5null'
console.log(typeof type);        // output string

let type_1 = '5' + 2;
console.log(type_1);        // output '52'
console.log(typeof type_1);  // output string

let type_2 = '5' - 2;
console.log(type_2);        // output 3
console.log(typeof type_2);  // output number

let type_3 = '5' * 2;
console.log(type_3);        // output 10
console.log(typeof type_3);  // output number

let type_4 = '5' * '2';
console.log(type_4);        // output 10
console.log(typeof type_4);  // output number

let type_5 = '5' * 'yes';
console.log(type_5);        // output NAN not a number
console.log(typeof type_5);  // output number

// conversion given by js 

// String()

let type_con=10;
console.log(typeof type_con);

let new_type = String(type_con);
console.log(typeof new_type);       // output '10'

// Number

let type_con_1='10';
console.log(typeof type_con_1);

let new_type_1 = Number(type_con_1);        
console.log(typeof new_type_1);         // output 10     

// Bollean

let type_con_2=0;
console.log(typeof type_con_2);

let new_type_2 = Boolean (type_con_2);      // output true  
console.log(typeof new_type_2); 

