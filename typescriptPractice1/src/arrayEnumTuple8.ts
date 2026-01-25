// ************************** Arrays in TS ******************************** 


// *********************** Declaring a Array ************************ 

//Method-1
const chiyaFlavours: string[] = ["Masala", "Adrak"];
const chiyaPrice: number[] = [10,20];

//Method-2
const rating: Array<number> = [4.5, 50];


// ************************* Array of Objects ************************
type Chiya = {
    name: string;
    price: number;
}

const menu: Chiya[] =[
    {name: "Masala", price: 15},
    {name: "Adrak", price: 15},
];

menu.forEach(a => {
    console.log (a.name);
})
    
//  ******************** "readonly" Array in TS ************************ 
// The arrays which we can't modify


const cities: readonly string[] = ["Kathmandu", "Pokharar", "Dhangadhi"];
// cities.push("Baskheda") // error => push property doesn't exist on type readonly string[]


// ******************** Multi-dimensional Array in TS *****************************  

// *********** Creating 2D Array **************** 
// => Using a array inside an Array to create 2D array


const table: number [][] = [
    [1,2,3],
    [4,5,6]
]

table.forEach(a => (a.forEach(a=>console.log(a))));


// ************************* Tuple in TS ************************* 


// firstly declare "dataype" followed by "tuple_name" followed by colon(:) then ...
// declare the array of type with fixed length and fixed position => which is tuple

// It is used to create array of types having fixed length and fixed location/position
// The values of tuple always comes inside an array 


let chiyaTuple: [string, number];
chiyaTuple = ["Masala", 20];
// chiyaTuple = [20, "masala"]; // error => can't assign type number to type string and type string to type number

chiyaTuple.forEach(a => console.log(a));


// *************** Creating with optional type tuple **************** 

let userInfo: [string, number, boolean?]; // first and 2nd type is fixed and third type boolean is optional

userInfo = ["Arjin", 100];
userInfo = ["Arjin", 100, true];
userInfo.forEach(a => console.log(a));

// ********************* Readonly Tuple ********************* 

// firstly declare "dataype" followed by "tuple_name" followed by colon(:) then "readonly" keyword
// and then declare the array of type with fixed length and fixed position => which is tuple

const location: readonly [number, number] = [28.66, 32.22];
location.forEach(a => console.log(a));

// ************************** Named Tuple => Best Practice ******************* 
// just give name to each tuple i.e we have to "assign for each type defined inside array" after colon(:) while defining tuple

// Example:

const chiyaItems: [name: string, price: number] = ["Masala", 25];

// ************************** Unexpected Problem with Tuple ************************ 
// Although we have created tuple which defines the fixed size and fixed position of an array 
// At the end of day, "tuple is also an array" so we can use method like .push(), .pop() on that tuple
// Which is a bad practice and which causes unexpected error which becomes complicated when debugging
// So always make sure to "don't use any array method on tuples"

let t: [string, number] = ["chai", 10]
t.push("extra");




// ************************** enum ********************************** 

// It restricts the choice of enum 


// **************************** Declaring an enum ************************** 

// Firstly write "enum" and then open curly brackets{}, 
// inside which we gonna define the values (userdefined values) to each key 
// and if we don't define the values of each keys bydefault 1st key will have "0" and then remaining would be incremented by 1 on each step
// similarly if we just define the value of one key, the value below that key will have value incremented by 1 on each parameter 
// Always declare the value inside enum in CAPITAL_CASE(Each word must be CAPITAL_CASE)


//  Example 

enum CupSize{
    SMALL, // bydefault the value of small will be zero if we don't assign values to it
    MEDIUM, // 0++ => 1
    LARGE // 1++ => 2
}
console.log(CupSize.SMALL);
const size = CupSize.LARGE;
console.log(size);


// **************************** Incremental Value inside an enum *********************** 
// If we define the value of first parameter of enum , the other parameters values will be automatically assigned by incrementing by 1 in each parameter


enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED, // 102
}
console.log(Status.SERVED);

enum ChiyaType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChiya(type: ChiyaType){
    console.log(`Making :${type}`);
}

makeChiya(ChiyaType.MASALA);

// makeChiya("masala"); //error => argument "masala" string type can't be assigned to ChiyaType type



// ********************* Creating random "enum" of "multiple type" => badPRACTICE ****************

enum RandomEnum {
    ID = 1,
    NAME = "chiya"
}

// ******************** Making constant enum ********************* 

const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

console.log(`Serve me matka chiya ${Sugars.LOW} tb spoons sugar`);


