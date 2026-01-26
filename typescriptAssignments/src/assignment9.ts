// interface Assignment {
//     id: string;
//     title: string;
//     description?: string;
//     grade: string;
// }

// // Render the assignment description only if description is provided in the object
// // Use conditional rendering to achieve this
// // If there is no assignment description provided, it should render "No description available"
// const assignmentEvaluation = (assignment: Assignment) => {
//     console.log(`The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`);

//     console.log(`Assignment Description: ${assignment.description}`);
// }



interface Assignment {
    id: string;
    title: string;
    description?: string;
    grade: string;
}

// Render the assignment description only if description is provided in the object
// Use conditional rendering to achieve this
// If there is no assignment description provided, it should render "No description available"
const assignmentEvaluation = (assignment: Assignment) => {
    console.log(`The assignment ${assignment.id} titled "${assignment.title}" has been graded: ${assignment.grade}`);
    (assignment.description) ? console.log(`Assignment Description: ${assignment.description}`):console.log(`No description available`);
}

const assignment1:Assignment = {
    id: "ASS009",
    title: "Optional Parameter",
    description: `Checking a problem related to Optional Parameter on which test-taker has created a optional parameter "description" on Assignment interface. Additionally, test-taker has assigned the interface to a function argument "assignment" and has logged the description only if it was defined else test-taker has logged no description available\n`,
    grade: "A++",
}
assignmentEvaluation(assignment1);

const assignment2:Assignment = {
    id: "ASS004",
    title: "Optional Parameter on an Interface",
    grade: "A+",
}
assignmentEvaluation(assignment2);