
// ****************** OOP in TS ******************************** 

class Chiya {
    flavour: string;
    price: number;

    constructor(flavour:string, price: number){
        this.flavour = flavour;
        this.price = price;
        console.log(this);
    }
  
}

const masalaChiya = new Chiya("Ginger", 30);
masalaChiya.flavour = "masala";


// ****************** Access Modifiers: Public, Private, & Protected ******************** ]
// Always use "_" before the variable name if we are declaring it private 
// and we can define private members using "private" keyword or using "#" symbol
// if we declared using "#" symbol then while assigning or using that variable inside class ...
// make sure to use "#" sign there too

class Chiyaa{
    public flavor: string = "Masala"
    private _secretIngredients = "Cardamom"; // can only access only within the class
    // can't directly access private variable instead use function to acccess this

    reveal (){
        return this._secretIngredients // this function will be used to access private variable
    }

}

const c = new Chiyaa();

console.log(c.reveal());

class Shop {
    protected shopName = "Chai corner" 
    // only have access within class or class inherited form this class
}

class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}
const customer = new Branch();
console.log(customer.getName());



class Wallet{
    #balance = 100; // creating private member

    getBalance(){
        return this.#balance;
    }
}
const w1 = new Wallet();
console.log(w1.getBalance());


// ***************************** readonly property in Class ********************** 

// In TypeScript, readonly doesn't mean the value is "immutable from the moment of birth."
//  It means it is immutable after the object is finished being built.

// The constructor is the only place where you are allowed to assign (or re-assign) a readonly property.

// The "point" of "using readonly" is to protect the property from the outside world
//  and from future methods inside the class.

class Cup{
    readonly capacity: number = 250;

    constructor(capacity: number){ // only constructor can assign readonly values
        this.capacity = capacity;
    }
    getCupSizeInfo(){
        console.log(`there is total ${this.capacity}ml in 1 cup`)
    }

    // // Inside the class:
    // changeSize() {
    //     this.capacity = 100; // ERROR: Even internal methods can't touch it!
    // }
}

const c1 = new Cup(400);// Constructor allowed to set it to 400
// c1.capacity = 500; //  ERROR: Cannot assign to 'capacity' because it is a read-only property.
c1.getCupSizeInfo();



// ************************* Controlled Gates: Getters and Setters  *********************** 
// Always make sure the Getters and Setters have the same name 

class ModernChiya{
    private _sugar = 2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if (value>5) console.log("Too Sweet so keep using default values");
        else this._sugar= value;
    }
}

const modernC = new ModernChiya();
modernC.sugar = 3;
console.log(modernC.sugar);
modernC.sugar = 7;
console.log(modernC.sugar);


// ****************** Static ********************* 

class EkChiya{
    static shopName = "Chiyadani"

    constructor(public flavour: string){}
}
console.log(EkChiya.shopName); // static members will call directly upon className

// ******************* Abstract Class ************************** 

// such class from which we can't make the objects are abstract class 

abstract class Drink{
    abstract make(): void
}

class MeroChiya extends Drink{ // this class will give error => until we make "make()" class inside it
    // else it gives error like: Non-abstract class "MeroChiya" doesn't implement inherited ...
    // abstract member "make" from class
    make(): void {
        console.log("Brewing Chiya");
    }
}

// ********************* Composition concept in TS ********************** 

class Heater{
    heat(){

    }
}

class ChiyaMaker{
    constructor(private _heater: Heater){ // this is called composition
        // the private variable _heater is of type Heater() class and once we point like this
        // we can have access to all the methods of Heater class

    }

    make(){
        return this._heater.heat;
    }
}





// ******************** Inheritance and Polymorphism ******************* 
// This also works same as in javascript