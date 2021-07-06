

let teachers = ['Shane', 'Zack'];

console.log(teachers);

console.log(teachers.push("Josh"));

let arrayLength = teachers.length;
let oldTeacher = teachers.pop();


teachers.unshift("New Guy");
let newGuy = teachers.shift();

teachers[5] = "Mister Fiver";

console.log("at index 5 " + teachers)
console.log("The array is now: " + arrayLength);
console.log("the old teacher was: " +  oldTeacher);
console.log(teachers);
console.log("the new guy was: " + newGuy);

console.log("Index of Shane: " + teachers.indexOf("Shane"));

// slice shows the values between the first value and the second value
let teacherSlice = teachers.slice(0,3);
console.log("teacher slice is " + teacherSlice);
console.log(teachers);

// splice will replace the chosen values with a new value
let teacherSplice = teachers.splice(0,3, "Josh");
console.log("teacher splice is: " + teacherSplice);
console.log(teachers);

// access each thing in the array,can log or see how many times 
// something occurs in the array


for (let i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
}

let numberOfJoshs = 0;
let indexOfJoshs = []
for(let i = 0; i < teachers.length; i++); {
    if (teachers[i] === "Josh"); {
        numberOfJoshs++;
        indexOfJoshs.push(i);
    }
}

console.log(teachers);
