// *********************** Type Inference ***************** 

// When we don't the declare the type in ts then it will infer the type directly  
// We can find the type of any object directly by hovering the mouse pointer on that variable 

let drink = "chiya"; //here it is string
// drink = 2; // here it will show the error => type number can't be assigned to type string  

// when we do this 
let cups = Math.random () > 0.5 ? 10 : "5"; // here by default ts will assign the type : string | number


// ********************* Type Annotation **********************

// Here we'll denote the type explictly

let chiyaFlavour:string = "matka chiya"; // here we explicitly denote the chiyaFlavor as string
chiyaFlavour = "elaichi matka"; // we can redeclare it but make sure type don't change (string variable will always be string)

// chiyaFlavour = 12 ; // it will show the error (number won't be assignable to type string)


console.log(`I want ${cups} cups ${drink} in ${chiyaFlavour} flavour`);