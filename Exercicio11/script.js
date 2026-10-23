/* let a = ['carlos', 'cleide', 'dalva'] */
/* console.log(a)
console.log(n[0])

for(let pos=0;n.length;p++) {
    console.log(n.pos
    } 
    
    n.push(1)
    n.sort()
    console.log(n)
    console.log(`O vetor tem ${n.length} posicoes.`)
    console.log(`O primeiro valor do vetor e ${n[0]}`) */
        
    let valores = [9, 7, 5, 3, 4, 8]
    valores.sort()
    
    let a = valores.indexOf(8)
 
    if (a == -1) {
        console.log(`O valor nao foi encontrado`)
    } else {
        console.log(`O valor ${valores[a]} esta na posicao ${a}`)
    }

    /* Codigo simplificado */

    for(let pos in valores) {
        console.log(`A posicao ${pos} tem valor ${valores[pos]}`)
    }



    /* for(let pos=0; pos < valores.length; pos++) {
        console.log(`A posicao ${pos} tem  o valor ${valores[pos]}`)
    } */