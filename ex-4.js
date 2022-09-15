const prompt = require ('prompt-sync')()

let PessoasCalmas = 0
let MulheresNervosas =0 
let HomensAgressivos =0 
let outrosCalmos =0
let nervosas40 = 0
let calmas18 = 0
let contador = 0
    while (contador < 150) {const idadeText = prompt('Digite sua idade: ')
    const idade = Number(idadeText)

    console.log('Escolha seu gênero, entre: ');
    console.log('1 - Homem')
    console.log('2 - Mulher')
    console.log('3 - Outro')

    const sexoText = prompt ('Escolha a opção de gênero entre: ')
    const sexo = Number(sexoText)
    console.log('Escolha seu humor entre: ')
    console.log('1 - Calmo')
    console.log('2 - Nervoso')
    console.log('3 - Agressivo')

    const humorText = prompt ('Escolha sua opção de humor:')
    const humor = Number (humorText)

        if( humor ==1) {PessoasCalmas++}
        if ( sexo ==2 && humor ==2) { MulheresNervosas++}
        if ( humor ==3 && sexo ==1){HomensAgressivos++}
        if(sexo==3 && humor==1){outrosCalmos++}
        if(humor ==2 && idade>40){nervosas40++}
        if(humor==1 && idade<18){calmas18++}

        contador++
    }

    console.log(`\nO total de pessoas calmas é: ${PessoasCalmas}`)
    console.log(`\nO total de mulheres nervosas é: ${MulheresNervosas}`)
    console.log(`\nO total de homens agressivos é: ${HomensAgressivos}`)
    console.log(`\nO total de outros calmos é: ${outrosCalmos}`)
    console.log(`\nO total de pessoas nervosas acima de 40 anos ${nervosas40}`)
    console.log(`\nO total de pessoas calmas com menos de 18 anos é: ${calmas18}`);