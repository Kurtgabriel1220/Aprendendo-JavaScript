/* let vel = 79
console.log(`A velocidade do seu carro e ${vel} Km/h`)
if (vel >= 80) {
    console.log(`Voce ultrapassou a volicidade permitida. MULTADO!`)
}
console.log(`Dirija sempre usando cinto de seguranca!`) */
/* 
let pais = prompt(`Qual E o seu pais?`)

let res = document.querySelector('div.div1')
let res1 = document.querySelector('p.')
let res2 = document.querySelector('div.div1')
res.innerHTML = `Vivendo em ` + pais


if (pais == 'Brasil') {
    console.log('Brasileiro')
} else {
    console.log(`Estrangeira`)
}
 */


function calcular() {
    let txtv = document.querySelector('input#txtvel')
    let res = document.querySelector('div.res')
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade e de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        alert(`Multado`)
    }else {
        res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    }

}