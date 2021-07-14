// console.log("script is loaded!");

let username = document.getElementById("username");
// can also getElementbyTagName or getElementbyclassName

username.value = "New Username!";

// get all inputs
let inputs = document.getElementsByTagName("input");
// let inError = document.getElementsByClassName("error");

let firstButton = document.querySelector("button");
let inError = document.querySelectorAll("input.error");

console.log("Number of inputs: " + inputs.length);
console.log("First button: " + firstButton);
console.log(firstButton);
console.log("Number of errors: " + inError.length);

// traversing the DOM
let listItems = document.querySelector("ul").children;
console.log("number of list items: " + listItems.length);
console.log(listItems);

let demo;

let selectedItem = document.querySelector("li.selected");
let first = selectedItem.previousElementSibling;
let last = selectedItem.nextElementSibling;
let list = selectedItem.parentElement;
let header = selectedItem.parentElement.parentElement;
let section = selectedItem.parentElement.parentElement.nextElementSibling;

console.log("selected item:");
console.log(selectedItem);
console.log("First item: ");
console.log(first);
console.log("last item:");
console.log(last);
console.log("list");
console.log(list);
console.log("header: ");
console.log(header);
console.log("section:");
console.log(section);

let myDiv = document.querySelector("div");
let myA = document.querySelector("a");

console.log("the innerHTML of the A:");
console.log(myA.innerHTML);
console.log("innterHTML of the div");
console.log(myDiv.innerHTML);
console.log("the inner text is:");
console.log(myDiv.innerText);

myA.innerHTML = "<h2>THIS IS HUGE! ...and updated</h2>"

