// // Fix the function

// function sendEmail(to: string, subject: string, cc: string) {
//     console.log(to, subject, cc.toLowerCase());
// }

// sendEmail("test@mail.com", "Hello");

function sendEmail(to: string, subject: string, cc?: string): void {
    if(cc) console.log(to, subject, cc.toLowerCase());
    else console.log(to, subject);
}

sendEmail("arjin@gmail.com", "typescriptAssignments", "gyanassir@gmail.com");
sendEmail("nirajan@gmail.com", "typescriptAssignments");