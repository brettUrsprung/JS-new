let header = document.querySelector("header");
console.log("header:");
console.log(header);

let sections = document.querySelectorAll("section");
console.log("section:");
console.log(sections);

let currentSection = document.querySelector("section,current");
console.log("current section:");
console.log(currentSection);

let afterCurrent = currentSection.nextElementSibling;
console.log("after the current section:");
console.log(afterCurrent);
