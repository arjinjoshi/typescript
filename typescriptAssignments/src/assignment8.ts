// Create a function that takes a status parameter and returns a message based on the status.
// Allow only the following status: "pending", "approved", "rejected"
// Any other value should result in a compile-time error.

// If pending, return "Your application is pending."
// If approved, return "Congratulations! Your application has been approved."
// If rejected, return "We regret to inform you that your application has been rejected."

type Status = "pending" | "approved" | "rejected" ;

function statusInfo(status: Status): string | undefined {
    if(status === "pending") return `Your application is pending.`;
    if(status === "approved") return `Congratulations! Your application has been approved.`;
    if(status === "rejected") return `We regret to inform you that your application has been rejected.`
}

const approved = statusInfo("approved");
console.log(approved);

const pending = statusInfo("pending");
console.log(pending);

const rejected = statusInfo("rejected");
console.log(rejected);

// statusInfo("yoyo"); // error => must pass the string defined inside string_literal else generate error 