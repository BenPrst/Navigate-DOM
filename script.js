//EX1

let main = document.querySelector('main')

let section1 = main.children[0]

let ol = section1.children[3]

let li1 = ol.children[0]

let li5 = ol.children[4]

ol.replaceChild(li5, li1)

ol.appendChild(li1)



console.log();

//EX2

let section2 = main.children[1]

let h2_2 = section2.children[0]

let section3 = main.children[2]

let div = section3.children[0]

let h2_3 = div.children[0]

section2.appendChild(h2_3)

section2.replaceChild(h2_3, h2_2)

div.insertBefore(h2_2, div.children[0])

//EX3

section3.remove()

