// ********************* Interface in TS ************************ 
//  The main function of interface to give shape to the object 

interface Chiya{
    flavor: string;
    price: number;
    milk?: boolean;
} 

const masala: Chiya = {
    flavor: "masala",
    price: 30,
};

// ******************** Readonly Property in interface *********************** 
interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1, 
    name: "ArjinInMotion Cafe"
}

// s.id = 2 // id is readonly so we can't reassign it 


// ******************** Call Signature () => (Executing the object as a function).******************** 
// In TypeScript, an interface can describe a function because, in JavaScript, functions 
// are technically objects. When we put parentheses () at the top level of an interface,
//  we are saying: "This object can be called like a function."

interface DiscountCalculator{
    (price: number): number 
    //unnamed function which takes price as type number and return type will also be number
}

const apply50: DiscountCalculator = (p) => p * 0.5;
console.log(`we got an item of RS 500 and after 50% discount in just Rs${apply50(500)} `);

// interface allows you to describe a "Hybrid" object—something 
// that is a function and has properties at the same time:

interface DiscountCalculatorr {
    (price: number): number; // The Call Signature
    discountName: string;    // A regular property
}

const blackFriday: DiscountCalculatorr = Object.assign(
    (p: number) => p * 0.5,
    { discountName: "Black Friday Sale" }
);

console.log(blackFriday(100));      // 50
console.log(blackFriday.discountName); // "Black Friday Sale



interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}
machine.start();
machine.stop();


// ***************** indexSignature[] => Accessing data by key ******************* 
// Even though square brackets [] usually mean "Array" in JavaScript, 
// inside a TypeScript Interface or Type definition, they have a different meaning: the Index Signature.

// example : 

// flavors: string[] =>	Property Type	=> This property is an Array of strings.

// flavor: string]: number => Object Key	
// =>This object can have any string as a key, and the value will be a number.


// The brackets around [flavor: string] are basically telling TypeScript:
//  "Treat the key name as a variable." It’s just like how in regular JavaScript, 
// you use brackets to access a property dynamically: myObj[variableName]. 
// TypeScript uses the same bracket symbol to define that dynamic behavior in the type.


interface ChiyaRatings {
    [flavor: string]: number; // This allows the OBJECT ITSELF to act like a dictionary
    // key must be string but it's value must be number
    //I don't know the exact names of the properties yet, 
    // but I promise that any string used as a key will have a number as a value.
}

const ratings: ChiyaRatings = {
    masala: 4.5,
    ginger: 4.5,
}



// *************************** Interfaces get combined ********************** 

interface User {
    name: string;
}

interface User{
    age: number;
}

const u: User = { // when we declare it's type as User and if user interface is defined twice
    // TS will merge both interface as one so we need to pass every parameter defined under same name
    name: "Arjin",
    age: 23
}


// *************************** Extending the Interface **************** 

interface A {a: string}
interface B {b: string}

interface C extends A, B{
}

const u1: C = {
    a: "Arjin",
    b: "InMotion"
}

console.log(`${u1.a+u1.b}`);