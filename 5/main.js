//write shivang 10 times
document.write("shivang") // copy paste same single of code 10 times

// now using loop


//while loop
let counter=1;

while(counter <= 10){
    document.write("shivang")
    counter=counter+1;      //same as counter++
}

let counter_1=10;

while(counter_1 >=1){
    document.write("shivang");
    counter_1--;
}

// print 1 to 100 even number sum

let counter_2=1;
let sum=0;      //to store value of sum

while(counter_2 <=100){
    if(counter_2 % 2 == 0){
        sum=counter_2 + sum;
    }
    sum++;
}

document.write(sum);


// do while loop

let count1=1;
let sum1=0;

do{
    document.write("gg this works");
    count1++;
} while(count1<=10)

document.write(sum1);

// for loop



for(let count2=1; count2<=10; count2++){
    document.write("yes this work");

}



