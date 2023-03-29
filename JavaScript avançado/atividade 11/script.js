let idade = prompt('Qual sua idade?')


if(idade >= 18){
    let cnh = prompt('Você possui cnh? s/n')
    if(cnh == 's'){
        console.log('Usuário pode dirigir')
    } else {
        console.log('Usuário não possui CNH')
    }
} else {
    console.log('Usuário não tem a idade minima para dirigir')
}