function carregar () {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 5 && hora < 12) {
        // Bom Dia!
        img.src = '/Exercicio1/assets/manha.jpg'
        document.body.style.background = '#3977ffc9'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = '/Exercicio1/assets/tarde.jpg'
        document.body.style.background = '#df8d21cc'
    } else if (hora >= 18 && hora < 1 ) {
        //Boa noite!
        img.src = '/Exercicio1/assets/noite.jpg'
        document.body.style.background = '#101031'
    } else {
        //Não durma muito tarde!
        img.src = '/Exercicio1/assets/noite.jpg'
        document.body.style.background = '#101031'
    }
}

console.log(msg)