// All primitive datatypes are passed by value (String, Number, Boolean, Null, Undefined)
// The value changes only inside the function. Outside the function scope, still remains the same.
// More predictable, and changes are to the value rather than the address/ reference 


function passByValue(num1, num2){
    console.log("Inside Call By Value");
    num1 = num1+100;
    num2 = num2+100;
    console.log("Num1: " + num1 + " Num2: " + num2);
}

let num1 = 100;
let num2 = 200;

console.log("Before calling pass by value method");
console.log("Num1: " + num1 + " Num2: " + num2);

passByValue(num1, num2);

console.log("After Calling pass by value method");
console.log("Num1: " + num1 + " Num2: " + num2);



