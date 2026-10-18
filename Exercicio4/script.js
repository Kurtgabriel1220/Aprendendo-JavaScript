
let p1 = document.getElementsByTagName('p')[1]
document.write(`Esta escrito assim:${p1.innerHTML}`)
p1.style.color = '#e9eff0'

let p2 = document.getElementsByTagName('p')[0]
p2.style.marginLeft = '70px'


let joj = document.getElementsByTagName('body')[0]
joj.style.background = 'black'

/* alert([p1.innerText]) */


let text = document.getElementsByClassName('text')[0]
text.style.color = 'green'
text.innerHTML = 'lonely hearts club band'


let msg = document.getElementById('msg')
/* msg.innerText = 'Ola'
msg.style.color = 'green' */


/* Seletor (query selector) */

let w = document.querySelector('p.text2')
w.style.color = 'blue'