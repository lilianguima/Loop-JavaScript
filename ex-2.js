const prompt = require ('prompt-sync')()

let par =0
let impar = 0

for(let numero=0;numero<10; numero++) {
   
    let numeroText = prompt ('Digite um valor: ')
    let numero = Number(numeroText)

if(numero%2 ==0) { 
    par++}
    
    else if (numero %2 ==1) {
        impar++}
}
        console.log(`Quantidade de números pares: ${par}`);
        console.log(`Quantidade de números Ímpares: ${impar}`);