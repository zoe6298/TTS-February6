// let header = document.querySelector('header');
// console.log(header);

// let sectionItems = document.querySelectorAll("section")
// console.log(sectionItems)

// let sectionCurrent = document.querySelector("section.current")
// console.log(sectionCurrent)

// let sectionAfterCurrent = sectionCurrent.nextElementSibling
// console.log(sectionAfterCurrent)

// let h2 = sectionCurrent.previousElementSibling.children
// console.log(h2)
// 03.07
let coffee = document.querySelectorAll('li')[1]
coffee.innerHTML = "Fair Trade Coffee"

document.querySelectorAll("li")[3].remove()
let newItem = document.createElement('li')
newItem.innerHTML = "Cheese Whiz"
document.querySelector('ul').appendChild(newItem);

a = ['protein powder', 'muscle milk', 'power bars']
list = document.querySelectorAll('li')
for (let i = 0; i < list.length; i++) {
    list[i].remove()
}

let listItem = [];

for (var i = 0; i < a.length; i++) {
    listItem[i]= document.createElement("li")
    listItem[i].innerHTML = a[i]
    document.querySelector('ul').appendChild(listItem[i])
}

let muscleMilk = document.querySelectorAll('li')[1]
muscleMilk.className = ("important")
console.log(muscleMilk)