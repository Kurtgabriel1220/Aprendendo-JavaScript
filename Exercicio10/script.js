function somar() {
    let div = document.querySelector(`div.div1`)
    let num1 = document.querySelector('input#n1') 
    let num2 = document.querySelector('input#n2')
    let i = Number(num1.value)
    let f = Number(num2.value)
    let soma = i + f

    alert(`O resultado de ${i} e ${f} E de ${soma}`)
} 