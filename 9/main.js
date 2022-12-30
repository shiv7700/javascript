// functions in js 

// function table(){
//     for(let i=1; i<=10; i++){
//         // console.log(i*2);
//         document.write(`2 X ${i} = ${2*2}`);
//         document.write("<br>");
//     }
// }

// table();
// document.write("<br>");
// table();

// parameter and argument in function 

function t(n){
    for(let i=1; i<=10; i++){
    document.write(` ${n} X ${i} = ${n*i}`);
    document.write("<br>");
    }
}

t(3);
document.write('<br>');
t(5);
document.write('<br>');
t(10);
document.write('<br>');
t(20);
document.write('<br>');
t(100);

// function add(a,b){
//     document.write(`${a+b}`);
//     document.write("<br>");
//     document.write(a+b);
// }

// add(2,5);

// argument is object we can use this as array

function arg(){
    // console.log(arguments.length);
    // console.log(arguments[2]);  
    
    if(arguments.length==0){
        console.log("Empty");
    } else {
        let sum=0;
        for(let i=0; i<arguments.length; i++){
            sum=sum+arguments[i];
        }
        console.log(sum);
    }
}

arg(1,2,3,4);

let addition=arg;
addition(4,5,2,10);

// function return value

function ad(a,b){
    return a+b;
}

let c=ad(2,10);
console.log(c);


function back(a,b){
    if(a>b){
        return 1;
    } else {
        return 2;
    }
}

let f=back(4,5);
console.log(f);






