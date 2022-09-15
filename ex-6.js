/*Escrever um programa que receba vários números inteiros no teclado. 
E no final imprimir a média dos números múltiplos de 3. 
Para sair digitar 0(zero) */

const prompt= require ('prompt-sync')()

let N =0
let media = 0
let qtd = 0
   
    do{
        N = parseInt(prompt('Digite um número (Insira 0 para encerrar): '))
        if(N % 3 ==0) { media = media+ N
                        qtd++ }
    } while(N !=0)
    console.log(`A media dos números foi: ${media/qtd}`)