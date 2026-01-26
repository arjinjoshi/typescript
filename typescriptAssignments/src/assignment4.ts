// Create a User type. Add relevant properties with appropriate types (e.g, firstName, lastName, age, email, isActive), etc.
// Then write a function that takes a User object as a parameter and console.logs their information.

type User = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    isActive: boolean;
}

function userInfo(user: User):void{
    let {firstName, lastName, age, email, isActive} = user;
    console.log(`User Information:\nfirstName = ${firstName}\nlastName = ${lastName}\nage = ${age}\nemail = ${email}\nisActive = ${isActive}`)
}

let user1: User = {
    firstName:"Arjin",
    lastName:"Joshi",
    age: 23,
    email: "thearjinjoshi1@gmail.com", 
    isActive: true
 }

 userInfo(user1);
