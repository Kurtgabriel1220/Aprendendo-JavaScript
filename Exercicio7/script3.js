let agora = new Date()
let diaSem = agora.getDay()
/* 
0 = Domingo
0 = Segunda
0 = Terca
0 = Quarta
0 = Quinta
0 = Sexta
0 = Sabado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log(`Segunda-Feira`)
        break
    case 2:
        console.log(`Terca-Feira`)
        break
    case 3:
        console.log(`Quarta-Feira`)
        break
    case 4:
        console.log(`Quinta-Feira`)
        break
    case 5:
        console.log(`Sexta-Feira`)
        break
    case 6:
        console.log(`Sabado`)
        break
}