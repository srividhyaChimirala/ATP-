




const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

console.log(employees);

//employees from IT department

let task1=employees.filter(e=>e.department==="IT")
console.log("Employees from IT department : ",task1);

//map () to add salry : salary + 10% bonus

let task2=employees.map(function(e){
    e.salary=e.salary+(e.salary/100)
})

console.log("Updated Salaries :",employees);


// reduce() to calculate total salary payout
task3=employees.reduce((acc,emp_sal)=>acc+emp_sal.salary,0)
console.log("Total salary payout : ",task3);

// find() employee with salary 30000

let task4=employees.find(emp=>emp.salary=30000)
console.log("Employee with salary 30000 : ",task4);


// findIndex() of employee "Neha"
task5=employees.findIndex(emp=>emp.name==="Neha")
console.log("Employee details with name NEHA : ",task5);