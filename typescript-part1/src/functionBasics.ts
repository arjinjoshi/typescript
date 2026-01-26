const  greet = (name: string): string => {
    return `Hello ${name}`;
}
 
console.log(greet("Arjin"));


// Optional Params in function 


// const greeting = (name: string, greets?: string="Good Morning"): string => {
//     if (greets) {
//         return `${greets} ${name}!`
//     };

//     return `Hello ${name}`
// }

// console.log(greet("Arjin"));
const greeting = (name: string, greets: string="Good Morning"): string => {
    if (greets) {
        return `${greets} ${name}!`
    };

    return `Hello ${name}`
}

console.log(greet("Arjin"));