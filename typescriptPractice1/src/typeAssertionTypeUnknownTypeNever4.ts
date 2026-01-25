// Where does typeAssertion get failed?? 

let response: any = '42';

let numericLength:number = (response as string).length; //typeAssertion

// if we don't wrap the response as string then it won't show mehods of string if we press dot(.)
// but when we wrap the response as string then it shows all available methods of string when we press dot(.)
console.log(numericLength);

 type Book = {
    name: string
 }

 let bookString = '{"name":"karnali blue"}';

 let bookObject = JSON.parse(bookString) as Book; 
 // forcefully saying the BookString's value is of type Book

 console.log(bookObject.name); 
 // once we have defined the data is of type book then only we can use the parameter of Book object

//  const inputElement = document.getElementById("username") as HTMLInputElement; 
//  // here we are using "type assertion to say" the data that we are getting from inputElement
// //  it is of "type HTMLInputElement" so that we can use all available methods on that later.


// ********************************* Any VS Unknown ******************************** 

let value: any;
value = 'chiya';
value = [1,2,3];
value = 2.5;
// value.toUpperCase(); // here any willnot throw an error and we'll get error once we ran it


let newValue: unknown;
newValue = 'chiya';
newValue = [1,2,3];
newValue = 2.5;
// newValue.toUpperCase(); // here unknown will throw an error

// Unknown says you need to explicitly say me the types( using typeguards/safeguards) ...
// Before call, construct, or access properties on those values 


// ********** now using safeguards/typeguardss ************* 
newValue = "lemon chiya";
if(typeof newValue === "string"){
    console.log(newValue.toUpperCase());
}


// ********************** TRY & CATCH using typeGuard/safeGuards ****************************** 

try{

}catch (error){
    if(error instanceof Error){
        console.log(error.message); 
        // if error is object of Error Class then it must have message property so using typeGuardss
    }
    console.log("Error", error);
}


// *********************** Type Assertion contd... *****************************

const data: unknown = "arjininmotion";
const strData: string = data as string; // it willnot allow to assign unknown type to string type
// so we are type asserting on data before assigning it to strData of type string



type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role; 

    // // edge case => it is of "type never" because we have condition to handle both cases of role
    // // but when some developer added "super_admin" to "type role" then "role will be of type super_admin"
    // // so we can also check the edge cases in ts like this
}

redirectBasedOnRole("user");


// ********************** use of Never **************************** 
// server are also something that's running on infinite loops and they serve request once they get it 
// similarly, here we are saying the function "neverReturn" is of "type never" that means it will run continuously if we ran this function
// that means the execution will be forever stuck here and the codes written after this won't run because this will run endlessly 

function neverReturn(): never{
    while(true){

    }
}