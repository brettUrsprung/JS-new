// console.log("script is loaded!")

// function calculator (operation, x, y) {
//     return operation(x, y);
// }

// function add(a, b) {
//     return a + b;
// }

// let result = calculator(add, 2, 3);
// console.log(result)




// what the heck??????
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(4, 5, myDisplayer);




let numbers = [6, 7, 1, 2, 3, 4, 5];
numbers.sort((a, b) => {
  return  a - b;
});
console.log(numbers);


console.log("Starting Timer");

setTimeout(function afterTwoSeconds() {
    console.log("Five seconds have Passed!");
}, 5000);

console.log("This happens after the timeout function!");


setInterval(timestamp, 1000);

function timestamp() {
    let d = new Date();
    document.getElementById("time").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()}


function carDisplayer(some) {
    document.getElementById("carZone").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error:" + req.status);      
        }
    }
    req.send();
}

getFile(carDisplayer);