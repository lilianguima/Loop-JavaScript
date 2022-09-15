/* Crie um programa que leia um número do teclado 
até que encontre um número igual a zero. 
No final, mostre a soma dos números digitados. */

const prompt = require ('prompt-sync')()


let somaNumeros = 0
let N = 0  


    do{  N = parseInt(prompt('Digite um número (insira 0 para encerrar): '))
        if (N>0) { somaNumeros = somaNumeros + N
        }
 
    }  while (N != 0)
    console.log(`A soma dos numeros inseridos foi: ${somaNumeros}`)