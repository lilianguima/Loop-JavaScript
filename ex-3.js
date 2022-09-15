//Solicitar a idade de várias pessoas e imprimir: 
//Total de pessoas com menos de 21 anos. 
//Total de pessoas com mais de 50 anos. 
//O programa termina quando idade for =-99.

const prompt = require ('prompt-sync')()

let total21 = 0
let total50 = 0
let idade = 0

while (idade != -99) {
    let idadeText = prompt('Insira sua idade (Digite -99 para encerrar): ')
    idade = Number (idadeText)
    
        if ( idade <=21) {
            total21++
        } else if ( idade >= 50) { 
            total50++}
    
}   console.log(`Total de pessoas com menos de 21 anos: ${total21}`)
    console.log(`Total de pessoas com mais de 50 anos: ${total50}`)