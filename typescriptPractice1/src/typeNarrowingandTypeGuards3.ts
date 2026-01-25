// ********************** Any VS Unknown ********************** 
// Any => It doesn't forces us to type checking before we try to call, construct or access properties on those defined values 

// Unknown => It forces us to type checking befoer we try to call, construct or access properties on these defined values.





// ************************* Type Narrowing ******************** 
// It is used to handle each case perfectly for each  case and also find the truthiness 

function getChiya(kind: string | number){
    if (typeof kind === "string"){
        return `Making ${kind} chiya...`;
    }
    return `Chai order: ${kind}`;
}

console.log(getChiya("matkaChiya"));


// this is exhaustive check 
function serverChiya(msg?: string ){ // taking msg as a optional argument
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chiya`;
}

console.log(serverChiya());

// *************************** Exhaustive Check **************************** 
// technique used to ensure that we have handled every single possible value in a Union type (like a list of specific strings or a set of object types).


// It is a way to turn "I think I covered everything" into "The compiler guarantees I covered everything."

// by writing exhaustive check using concept type narrowing we can achieve best Js practice
// checking with the value directly 
function orderChiya(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chiya`;
    }
    if(size === "medium" || size === "large"){
        return `make extra chiya`;
    }
    return `chiya order #${size}`;
}

console.log(orderChiya("small"));


// ********************* TypeGuards/ SafeGuards ********************** 
// safeguards / type Guards => any expression or function that performs a runtime check to confirm the type of a variable.

// Once a safeguard is passed, TypeScript "narrows" the type of that variable for the rest of that code block. This allows you to safely access properties or methods that wouldn't normally be available.

class matkaChiya{
    serve(){
        return `Serving matka chiya`;
    }
}

class cuttingChiya{
    serve(){
        return `Serving cutting chiya`;
    }
}

function serve(chiya: matkaChiya | cuttingChiya){
    if(chiya instanceof matkaChiya){
        return chiya.serve();
    }
    return chiya.serve();
}


// ********************* Type ***************************** 
// It is used to create a Type Alias. we can think of it as creating a custom "label" or "blueprint" for our data.
// Instead of writing a complex object structure over and over, we define it once and give it a name which turns "messy" code into "clean" code.

//  type is created just like we create object and just like in object (we use commna) here we use semicolon(;)

// creating our own type for typechecking using type 
type ChiyaOrder = { //customized type
    type: string;
    sugar: number;
}

function isChiyaOrder(obj: any):obj is ChiyaOrder{ 
    // returning a boolean => returns true, if object of type ChiyaOrder else false 
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

console.log(isChiyaOrder({type:"matka chiya", sugar: 2}));

function serveOrder(item: ChiyaOrder | string){
    if(isChiyaOrder(item)){
        return `Serving ${item.type} chiya with ${item.sugar} tb spoons sugar`;
    }
    return `Serving custom chiya: ${item}`;
}
console.log(serveOrder({type:"matka", sugar: 2}));


// We can also define different types like this and we can also give constant value like this 

type MasalaChiya = {
    type: "masala";
    spicelevel: number;
}

type GingerChiya = {
    type: "ginger";
    amount: number;
}

type ElaichiChiya = {
    type: "elaichi";
    aroma: number;
}


//defining the type of the chiya 
type Chiya = MasalaChiya | GingerChiya | ElaichiChiya;

function MakeChiya(order: Chiya){
   switch (order.type) {
    case "masala":
        return `Masala chai`;
        break;
    case "elaichi": 
        return `Elaichi Chiya`;
        break;
    case "ginger":
        return `Ginger Chiya`;
        break;
   }
}

console.log(MakeChiya({type:"masala", spicelevel: 3}));

// also we can define like this using "if"
function brew(order: MasalaChiya | GingerChiya){
    // so we can also verify just using/checking one property 
    if("amount" in order){ // only GingerChiya have spicelevel property so in this way also we can use safe guards
        return `${order.type} chiya for a gentleman`
    }
}

console.log(brew({type:"ginger", amount:4}))


function isStringArray(arr:unknown): arr is string[]{ //returning a boolean 
    // => returns true, if arr is array is of string types else 

    // if(!Array.isArray(arr)){// this method checks if arr is array or not 
    //     return false;
    // }

    // return arr.every(val => typeof val === "string"); // it checks every members of array must be string

    return Array.isArray(arr) && arr.every(val => typeof val === "string"); // using logical AND
    // this function is returning true only when both condition fulfills that means arr must be array of string types 
    // else it returns false
}