//tworze ul liste
let ullist = document.createElement('ul')
let liitem = document.createElement('li')
let item2 = document.createElement('li')
liitem.textContent = 'potpunkt1'
item2.textContent = 'potpunkt2'
document.body.appendChild(ullist)
ullist.appendChild(liitem)
ullist.appendChild(item2)
let div = document.createElement('div')
let para = document.createElement('p')
let head = document.createElement('h2')

para.textContent = 'paragraf'
head.textContent = 'h2'

document.body.appendChild(div)
// p i h2 sa dziecmi diva
div.append(para, head, 'to jest tekst dodany przec append')
