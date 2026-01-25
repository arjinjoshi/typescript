// function makeChiya(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }

// function serveChiya(order: {type: string; sugar: number; strong: boolean}){
//     console.log(order);
// }

// // Here we can see that the "signature of the order" argument is same in both cases so...
// // instead of writing again and again, we can define the "type" which will holds "signature value"



// ****************************** Type ************************* 

// Just like we define the object the "the type" also defined like that  
// firstly write "type" keyword followed by variable name and then make like object if necessary 
// and lastly each key-value pairs should be followed by semicolon(;) instead of Comma(,) as in object 

// Naming Convention: Always make sure the first letter of each word should be of CapitalCase while defining type 

// //  so we need to define like this 

type ChiyaOrder = {
    // type: "matkaChiya"; // we can also give like this value
    type: string ;
    sugar: number;
    strong: boolean;
};

function makeChiya(order: ChiyaOrder){
    console.log(order);
}

function serveChiya(order: ChiyaOrder){
    console.log(order);
}

// when does type fails ???

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChiyaa implements TeaRecipe{
    water = 100;
    milk = 50;
}

// *************************** Errors with types *************************


// Error comes when type changes 

type CupSizee = "small" | "large"; // can't implements userdefined/customized type in class 

// class Chiya implements CupSizee{ // will throw an error
//     // a class can only implement an object type or istersection of object types with statically known members

// }


// And that limitation of types is solved using interface




// ************************* Interfaces => solving limitation of type *************************** 

// Always make sure the first letter of word is CapitalCase when defining interfaces 
// While defining interfaces: firstly write "interface" keyword followed by variable_name
// Then we don't need equalsto(=) sign as in type just use curly brackets{ } and inside it ...
// Define like key-value pairs followed by semi-colon(;) sign

// // Example :
// interface TeaRecipee{
//     water: number;
//     milk: number;
// }


// => Just make sure" while dealing with classes" use "interfaces" instead of "types"

interface CupSize{
    size: "small" | "large";
}

// by defining the interface like this we can use userdefined/customized types and can implement it on Class

class Chiya implements CupSize{
    size: "small" | "large" = "large"; // size should be either of "small" or "large" type ...
    // and we have assigned it's value as large
}







// ******************* Another edgeCase: Where "type" fails ************************** 

type Responsee = {ok: true} | {ok: false};
// // also the classes won't implements the type containing union of object 

// class myRess implements Responsee{ // error 
//     // A class can only implement an objnect type or intersection of object types with statically known members
//     ok: boolean = true;
// }



// Solving such case using interfaces 
interface BaseResponse {
    ok: boolean;
}

interface SuccessResponse extends BaseResponse {
    ok: true;
}

interface ErrorResponse extends BaseResponse {
    ok: false;
}

// To use it like your original 'Responsee', you still need a Type Alias:
type Response = SuccessResponse | ErrorResponse;


class mySuccessRes implements SuccessResponse{ 
    ok: true = true;
}

class myErrorRes implements ErrorResponse{ 
    ok: false = false;
}


// ***************** Unions and Intersection on type **************** 


// ************************ string literal ************************** 
type TeaType = "masala" | "ginger" | "lemon";


function orderChiya(t: TeaType){
    console.log(t);
}

// can't use union of objects on type 


// Interseciton 

type BaseChiya = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChiya = BaseChiya & Extra;

const cup: MasalaChiya = {
    teaLeaves: 2,
    masala: 1,
}

type User = {
    username: string,
    bio?: string,
};

const u1: User = { username: "Arjin"};
const u2: User = {username: "Arjin", bio: "arjin is dangerous coder"};


// ***************** readonly useCase in "type" ******************* 
type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "ArjinInMotion",
    version: 1,
}

console.log(cfg);
// cfg.appName = "hello";  // can't change the property of readonly