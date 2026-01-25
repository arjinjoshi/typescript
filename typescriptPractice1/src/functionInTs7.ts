// ********************** Function in TS ************************** 

function makeChiya(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChiya("Masala", 2);

function getChiyaPrice(): number{ // after colon(:) followed "()" of function => Declare "returnType" of function 
    return 25;
}



function makeOrder (order:string): string | null{
    if(!order) return null ;
    return order;
};

// logger functions => define it's return type as void
function logChiya(): void{
    console.log("Chiya is ready");
}

logChiya();


// ********************** Default Parameters and Optional Parameters ******************* 
// Always remember default values and optional parameter are always declared at last in the function argument 

//optional type and if passed must be of string type
function orderChiya(type?:string): void{
    if(type) console.log(`${type} chiya ordered`)
    console.log("Masala Chiya ordered");
}

orderChiya("Ginger");

//optional type fixed with default valur

function orderChiyaa(type: string = "Masala"){
    console.log(`Serve ${type} chiya for a beautiful lady`);
}

orderChiyaa("Ginger");
orderChiyaa();

// Suppose if we don't declare the return_type of function then TS automatically "infer" it's type 



function createChiya (order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}) : number {
    return 4;
}

createChiya({
    type: "Masala",
    sugar: 2,
    size: "large",
})
