// Student Performance Analyzer

// Students Data
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

// Displaying All Students
console.log("All Students:");
console.log(students);

// filter() - Students Who Passed
const passedStudents = students.filter(
    student => student.marks >= 40
);

console.log("\nPassed Students:");
console.log(passedStudents);

// map() - Adding Grade Field
const studentsWithGrades = students.map(student => {

    let grade = "";

    if (student.marks >= 90) {
        grade = "A";
    }
    else if (student.marks >= 75) {
        grade = "B";
    }
    else if (student.marks >= 60) {
        grade = "C";
    }
    else {
        grade = "D";
    }

    return {
        ...student,
        grade: grade
    };

});

console.log("\nStudents with Grades:");
console.log(studentsWithGrades);

// reduce() - Average Marks
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

const averageMarks = totalMarks / students.length;

console.log("\nAverage Marks:");
console.log(averageMarks);

// find() - Student with 92 Marks
const studentWith92Marks = students.find(
    student => student.marks === 92
);

console.log("\nStudent with 92 Marks:");
console.log(studentWith92Marks);

// findIndex() - Student Named "Kiran"
const kiranIndex = students.findIndex(
    student => student.name === "Kiran"
);

console.log("\nIndex of Student Named Kiran:");
console.log(kiranIndex);