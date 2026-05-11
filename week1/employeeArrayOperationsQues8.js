/*const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
const employees = [
  {
    eno: 101, 
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
console.log(employees);     
employees.splice(1,0,{eno:106,name:'vidhya',marks:[90,85]});   //Insert new Emp at 2nd position
console.log(employees);
employees.splice(4,1);         //Remove an emp with name "Kiran"

console.log(employees);
employees.splice(3,1,{en0:103,name: 'Sneha', marks: [ 88, 92, 75 ] });  //Change the last mark 95 to 75 of emp  "Sneha"

console.log(employees);
