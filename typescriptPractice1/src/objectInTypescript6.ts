// ************************** Object in TS *********************** 

const chiya = {
    name: "Masala Chiya",
    price: 20,
    isHot: true
}
 
// // suppose if we didn't declare the type of this object. TS will "infer" it's type: like this
// const chiya:{
//     name: string;
//     price: number;
//     isHot: boolean;
// }


// ********************* Declaring object types ****************** 

let tea : {
    name: string ;
    price: number;
    isHot: boolean;
}

tea = { 
    name: "Ginger Tea", 
    price: 25, 
    isHot: true
}

console.log(tea);

// ******************** Alias Object of type in TS ******************** 

//reusable  
type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adhuwaChiya: Tea = {
    name: "Adhuwa Chiya",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

console.log(adhuwaChiya);

// **************************** Duck Typing ***************************
// If it quaks like a duck, walks like a duck then it must be a duck 


type Cup = {
    size: string;
}

let smallCup: Cup = {size: "200ml"};

let bigCup = {size:"500ml", material: "steel"}

smallCup = bigCup // here the bare minimum value is satisfying for Cup type 
// size is present is both smallCup and bigCup so it's not giving error even when bigCup have "material property"..
// because it's bare-minimum requirement meets 

console.log(smallCup);


// ************************* Structural Typing vs Duck Typing *******************  

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee ; 
//Even though coffee has an extra property (beans), it is considered a valid Brew...
//  because it contains at least the property brewTime.

console.log(chaiBrew);


// And sometime when we to have issue in such case of structural typing 

type User = {
    username: string ;
    password: string;
}

const u: User = {
    username: "arjininmotion",
    password: "123",
    // bio: "hello", // error if we defined like this => bio does exist in type User
}

// ********************* Direct Assignment (The "fresh" object) ************************* 


// When we define u and give it an object literal { ... } directly, 
// TypeScript treats that object as "Fresh."Because we are creating it specifically to be a User,
//  TypeScript is extra strict. It assumes that if we add bio, it must be a mistake or a typo,
// because a User doesn't have a bio. It blocks us to help us catch errors early.

const u1 = {
    username: "arjininmotion",
    password: "123",
    bio: "hello",
}
const u2: User = u1; // as we see above it is allowed 


// ************************ Indirect Assignment (The "Stale" Object) ********************** 

// When we created u1 first, you didn't give it a type. 
// TypeScript inferred its type as 
// {username: string, password: string, bio: string}.

// And then When we do const u2: User = u1;, the object is no longer "Fresh"; 
// it is now "Stale." For stale objects, TypeScript switches to standard Structural Typing:

// The Check: "Does u1 have a username (string)? Yes. Does it have a password (string)? Yes."
// The Result: "Minimum requirements met. I don't care about the extra bio property."


// ************************ Datatypes SplitOut in TS ************************* 

type Item = {name: string, quantity: number};
type Address = {street: string, pin: number};

type Order = {
    id: string;
    items: Item[];// here instead of defining the type of item here... we've created it seperately
    address: Address; // here also instead of defining the type of address here... we've created it seperately
} 
// like in the above case: we're splitting out the types so that it's make code more readable


// Defining the type in one type and we use it in more type 


// ********************* "Partial" keyword in Object in TS *************************


type Chiya = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChiya = (updates: Partial<Chiya>) =>{ 
    // when we use Partial Keyword=> it makes all property optional
    //  => even if all property are defined as required while defining type
    console.log("updating chiya with", updates)
}

updateChiya({price: 24}); // so it now became a type where only price: string contains
updateChiya({isHot: false});
updateChiya({}); // we can even pass empty object because all propety are optional of Chiya type


// ********************* "Required" keyword in Object in TS ************************* 

type ChiyaOrder = {
    name?: string ;
    quantity?: number;
}

const placeOrder = (order: Required<ChiyaOrder>) => { 
    // when we use Required Keyword=> it makes all property required strictly 
    // even if we have decalred the property as optional while defining type
    console.log(order);
}

// placeOrder({}) // so we can't pass empty object or with only a parameter => we need to define all parameters

placeOrder({
    name:"Masala Chiya", 
    quantity: 4
});


// ********************* "Pick" keyword in Object in TS ************************* 


// firstly use "Pick" keyword then < predefine_type, "parameter1" | "parameter2" | "parameter3" >;  
// secondly assign it to new type


type Chiyaa = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChiyaInfo = Pick<Chiyaa, "name" | "price" >; // just saying the BasicChiyaInfo must have these two parameters

// so we need to define both name and price parameters when defining under type BasicChiyaInfo
const chiyaInfo: BasicChiyaInfo = {
    name: "Lemon Tea",
    price: 30
}
console.log(chiyaInfo);


// ********************* "Omit" keyword in Object in TS ************************* 


// firstly use "Omit" keyword then < predefine_type, "parameter1" | "parameter2" | "parameter3" >;  
// secondly assign it to new type

// just remember while defining "parameters" inside Omit it doesn't autoSuggest parameter's name

type ChiyaNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChiya = Omit<ChiyaNew, "secretIngredients">
// now we don't need to pass secretIngredients while defining a variable of type PublicChiya

const public1: PublicChiya = {
    name: "Lemon Tea",
    price: 30,
    isHot: true,
    // secretIngredients: "keshar" // errror => now we don't need to define this here => already omitted
}

console.log(public1);