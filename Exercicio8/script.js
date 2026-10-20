function carregar() {
    let body = document.getElementsByClassName('corpo')[0]
    let msg = document.getElementById(`divPai`)
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora sao exatamente ${hora} horas.`
    if (hora >= 5 && hora < 12 ) {
        window.document.body.style.background = '#ffc013'
        //bom dia
    } else if (hora >= 12 && hora < 18) {
        body.style.background = '#b36c1b'
        //boa tarde
    } else if (hora >= 17 && hora < 23) {
        body.style.background = '#14132c'
        // Boa noite
    } else {
        body.style.background = '#14132c'
    }
}