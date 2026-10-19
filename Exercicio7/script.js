//Codigo criado e raciocinado por mim

let idade = 18 
if (idade >= 16 && idade <= 17) {
    console.log(`Pode votar (opicional)`)
}else {
    if (idade >= 18) {
        console.log(`Pode votar (Obrigatorio, caso nao votar paga multa)`)
    }else {
        console.log(`Nao pode votar.`)
    }
}

//Codigo da aula (Gustavo guanabara)

let id = 67
if (id < 16) {
    console.log('Nao vota')
}else if (id < 18 || idade > 65) {
    console.log(`Voto Opicional`)
}else {
    console.log(`Voto obrigatorio (Multa caso nao votar.)`)
}