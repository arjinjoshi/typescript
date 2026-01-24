// Basic Types 

// Primitive Types(deep copy when we assign primitive type to another)
// number, string, boolean


// Reference Types (shallow copy when we assign reference type to another)
// [], {}, () => usually we can say if we see these brackets, we can say it's a reference type
// Arrays
// Tuples
// Enums

// More Types: 
// Any, Unknown, Void, Null, Undefined, Never



// number
let num: number = 12.53;
// boolean 
const chiyaMithoThyo: boolean = true;
// string 
let chiyaTaste: string ;
chiyaTaste = "Mitho thyo chiya";

// Arrays 
let abcd: number[] = [2, 3, 4]; //numbers array

let abcde: (string | number)[] = [1, 2, 3, 4, "hello", "k xa"]; // numbers or string array


// *********************** Tuples *************************** 
// => Used to define types on array with fixed size and fixed position(location) 

let arr: [string, number] = ["arjin", 19]; // it's valid

// let arr2: [number, string] = ["arjin", 19]; // error string can't be assigned to number and number can't be assigned to string
// the 0th index should be of type number and 1st index should be of type string 


// ********************* Enums => Enumerations *********************** 

// Used to define a type of object whose key(var) have fixed values then to define those we use enum

// Example to define different Status Code which we can use later while giving error message

// // Rules: 
// Make sure it doesn't have equalsto (=) sign like object when defining 
// It uses equalsto (=) sign after defining key then put value pairs like Admin = "admin"



enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPERADMIN = "super_admin"
}

enum StatusCodes{
    ABONDONED = "abondoned status code 500",
    NOTFOUND = "not found status code 404"
}

console.log(UserRoles.SUPERADMIN)
console.log(StatusCodes.ABONDONED)


// ******************** More Types ***********************

// ************ any *********** 

// any => the variable will behave as in plain js code
let a ; 
// if we declare the variable without declaring it's type then bydefault ts will assing "any" type to it 

a = 12;
a = "arjin";
a = true;

// always make sure to never use "any" type 

// *********** Unknown **********
// In known atfirst the type will be unknown...
//   but before using any object or function on that variable, we need to define it's type


let b: unknown;

b = 13;
// we can't use methods on b like "any" type here..... until and unless we clearly say what is the type of b 

// so as we say if we define the type of "var" unknown then only we can use method on it 


// we can use the concept of typeNarrowing to type unknown
if(typeof(b) === "string"){
    console.log(b.toUpperCase()); // can only use methods that's available to use in string type
}else if(typeof(b) === "number"){
    console.log(b.toString()); // can only use methods that's available to use in number type
}else{
    console.log(b)
}





// ************* void ******************

// generally it is used when we aren't returning anything from the function 


function abcdef(): void{
    console.log("Hello guys");
    return;
} 
// here typeof function abcdef() is void 



// *************** null ****************** 

let c : null; // this is the correct way to define type of variable as "null"

// let d = null ; // here the type of d will be any so make sure we don't define like this



// ******************* undefined ******************* 

let e:undefined; // in this way we use undefined 


// *************** never ******************* 
// when we used never type on function that means the function will run endlessly without returning anything
// that means if we're running infinite loop on any function we should declare it's type as never 

function abc():never{
    while(true){

    }
}
abc();
// Press "Ctrl+c" on terminal to exit out from the infinite loop when we run it's corresponding js file 
// console.log("hey"); // here it's color is showing dull because this will not excute ever because the above function won't return anything ever and will run endlessly
