// Objects are always passed by reference. We pass the address of the object rather than the value as Objects are immutatble
// Since we are passing the address of the object, the value at the address changes.


function passByReference(obj){
    console.log("Inside Call By Reference");
    obj.a = 10;
    console.log("Object Value: ", obj.a);
}

let obj = {
    a:1
}

console.log("Before calling pass by reference method");
console.log("Object Value: ", obj.a);

passByReference(obj)

console.log("After Calling pass by refernce method");
console.log("Object Value: ", obj.a);