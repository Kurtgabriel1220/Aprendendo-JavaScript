function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtAno')
    let res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fSex = document.getElementsByName('radSex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', '/Exercicio2/assets/garoto.jpg')
            }else if (idade <21 ) {
                img.setAttribute('src', '/Exercicio2/assets/adolescenteM.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', '/Exercicio2/assets/jovemrapaz.jpg')
            }else {
                img.setAttribute('src', '/Exercicio2/assets/idoso.jpg')
            }

        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', '/Exercicio2/assets/garota.jpg')
            }else if (idade <21 ) {
                img.setAttribute('src', '/Exercicio2/assets/adolescenteF.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', '/Exercicio2/assets/jovemmulher.jpg')
            }else {
                img.setAttribute('src', '/Exercicio2/assets/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu genero e ${genero} e sua idade e de ${idade} anos.`
        res.appendChild(img)
    }
    
}
