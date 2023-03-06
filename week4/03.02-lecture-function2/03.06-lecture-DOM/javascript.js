let header = document.querySelector('header');
console.log(header);

let sectionItems = document.querySelectorAll("section")
console.log(sectionItems)

let sectionCurrent = document.querySelector("section.current")
console.log(sectionCurrent)

let sectionAfterCurrent = sectionCurrent.nextElementSibling
console.log(sectionAfterCurrent)

let h2 = sectionCurrent.previousElementSibling.children
console.log(h2)