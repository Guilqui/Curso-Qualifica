let contagem = (x) => {
    let resul = x
    while( resul != 0 ){
        if(resul % 2 == 0){
            console.log(`Numero par ${resul}`)
        }
        resul --
    }
}

contagem(124)