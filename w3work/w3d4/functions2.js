// console.log("script it loaded!")

function add(number1, number2) {
  return number1 + number2;
}

function doMath(operation, number1, number2) {
  return operation(number1, number2);
}

// add() is a callback function because it has been
// passed as an argument to doMath()
// operation is the parameter,, add is the argument

let sum = doMath(add, 1, 2);
console.log(sum);

let myArray = [1, 2, 3];

let students = [
  { name: "john", lastName: "lennon", average: 90 },
  { name: "ringo", lastName: "starr", average: 58 },
  { name: "paul", lastName: "mccartney", average: 82 },
];

let passingStudents = students.filter(function (student) {
  return student.average > 60;
});

// filter takes built array and creates a new array that fits
// the parameters youve set and then logs that new array with result

console.log(passingStudents);

let firstPassingStudent = students.find(function (student) {
  return student.average > 60;
});
// find is similar to filter but only returns one item

console.log("the first passing student: ");
console.log(firstPassingStudent);

// map 40:00 min w3d4 recording
// map goes through each item in array and pulls from it.

let fullNames = students.map(function (student) {
  return (
    student.name + " " + student.lastName + ", average is: " + student.average
  );
});

console.log("student's full names: ");
console.log(fullNames);

// bad example.. does nothing just returns what is in the array
let studentsClone = students.map(function (student) {
  return student;
});

console.log("student clone: ");
console.log(studentsClone);



// better example,map makes a new/related array but keeps the size of the array
let numbers = [1, 20, 300, 4000];
let randomNumbers = numbers.map(function (number) {
  return (Math.random() * number).toFixed(2);
});

console.log("our random number:");
console.log(randomNumbers);




// reduce 50:00 min in recording
// REDUCE takes 2 arguments
// spitsout 1 number based on the function you put into it
let totalGrades = students.reduce(
    function(sum, current){
        return sum + current.average;
    },
    0);
    console.log("total grades:");
    console.log(totalGrades);