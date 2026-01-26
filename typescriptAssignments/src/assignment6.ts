// Create a Person interface with properties like Name, address, age, email, etc.

// Extend the Person interface to create a Student interface that includes additional properties like studentID, and yearOfStudy.

// Extend the Person interface to create a Teacher interface that includes additional properties like employeeID, subjectSpecialization, and yearsOfExperience.

// Then write a function that takes either a Student or Teacher object as a parameter and outputs their details.

// If the object is of type Student, include the studentID and yearOfStudy in the output.
// If the object is of type Teacher, include the employeeID, subjectSpecialization, and yearsOfExperience in the output.

interface Person {
    name: string;
    address: string;
    age: number;
    email: string;
}

interface Student extends Person {
    studentId: string;
    yearOfStudy: number;
}

interface Teacher extends Person {
    employeeId: string;
    subjectSpecialization: string;
    yearsOfExperience: number;
}

function personInfo(details : Student | Teacher): void {
    if("studentId" in details )
        console.log(`\nStudent Information:\nname = ${details.name}\nage = ${details.age}\naddress = ${details.address}\nemail = ${details.email}\nstudentId = ${details.studentId}\nyearsOfStudy = ${details.yearOfStudy}`);
    else
    console.log(`\nTeacher Information:\nname = ${details.name}\nage = ${details.age}\naddress = ${details.address}\nemail = ${details.email}\nemployeeId = ${details.employeeId}\nsubjectSpecialization = ${details.subjectSpecialization}\nyearsOfExperience = ${details.yearsOfExperience}`);

}

const student1:Student = {
    name: "Arjin",
    age: 23,
    email: "thearjinjoshi1@gmail.com",
    address: "Shantinagar, Kathmandu",
    studentId: "LPFRG2026",
    yearOfStudy: 4,
}
personInfo(student1);

const teacher1:Teacher = {
    name: "Gyanas Luitel",
    age: 27,
    email: "gyanasluitel@gmail.com",
    address: "Kathmandu, Nepal",
    employeeId: "LPFRG2021",
    subjectSpecialization: "Full Stack - MERN",
    yearsOfExperience: 5,
}
personInfo(teacher1);