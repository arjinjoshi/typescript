// ********************* Generics in TS ********************** 
// These are templates 


function wrapInArray<T>(item: T): T[]{
    return [item];
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(42));
console.log(wrapInArray({flavor: "Ginger"}));



function pair <A,B>(a: A, b: B): [A,B]{
    return [a,b];
}

console.log(pair("masala",40));
console.log(pair("masala",{flavor: "Ginger"}));



// ******************* interface Generics *********************** 

interface Box <T> {
    content: T;
}

const numberBox: Box<number> = {
    content: 10 // the type of content should be same as of generics defined inside <number>
}

const numberBoxCup : Box<string> = {
    content: "10" // now type of content should be string because we defined generics as string
}

// ************* Generics support Partial, Required, Pick and Omit **************** 
// Also the read only properties can be used here 


// ********************* Real World Usecase of Generics ************************ 
// Mostly generics are used on API Responses, Form States Management of React 

interface ApiPromise<T>{
    status: number, 
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}
console.log(res.data.flavor);


// We don't define generics that much because it generally comes predefined in "React" and 
// also on other libraries too but how libraries were made was by using such generics