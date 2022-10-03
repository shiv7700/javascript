let change_data_type=5;
change_data_type='changed the data type from number to string';

// data types in js 

// stings 
let d_string="Shiv'ang";
let d_string_2='Shiv"ang';
let d_string_3="shiv\"ang";

console.log(d_string_3);

// numbers
let d_number=10;
let d_number_2=-50;
let d_number_3=0.884;

// boolean : true or false
let greater= 10>2;      //true
let greater_2= 10<2;    //false
let greater_3= 10==2;   //true
let greater_4= 10!=2;   //true

console.log(greater_4);

// array 
let array_example=["shivang" , "shivang 2" , "shivang 3"];
console.log(array_example);

// object (object is also a data type)

let man_infor={ name:"shivang" , course:"btech"};
console.log(man_infor);

// underfine is also a data type
let no_define;
console.log(no_define);

// typeof oeprator
let typeof_1= "shivang";
console.log(typeof typeof_1);

let typeof_2= typeof 1000;
console.log(typeof_2);


let name_of_person="shivang";
alert("hello " + name_of_person);

// using variable in a string
alert(`hello ${name_of_person}`);



// Comparison Operator

let con_1=10;   //assignment operator
let con_2=20;
let con_3='string_1';
let con_31='20';
let con_4=20;

//equality operator 
//double equal to
// note : double equal to does not care about data type it will compare even if a variable is in string and will return true as shown in 4th example 
console.log(con_1==con_2);      //false
console.log(con_2==con_3);      //false
console.log(con_1==con_3);      //false
console.log(con_2==con_31);     //true

// triple equal to 
// triple equal to first check data type and then condition

console.log(con_1===con_2);     //false
console.log(con_3===con_31);    //false

// not equal to operator
// not equal to or same data type
// check data type then value

console.log(con_1!=con_2);      //true
console.log(con_2!=con_31);     //false

console.log(con_1!==con_2);     //true
console.log(con_4!==con_31);    //true

console.log(con_2>con_1);       //true
console.log(con_2<con_1);       //false

//greater than or equal to
console.log(con_2>=con_1);      //true
console.log(con_2<=con_1);      //false

// and oeprator &&
// both condition should be true in && operator

// or operator || 
// return true if one of condition is true

//not operator !
// reverse the condition















