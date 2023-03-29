const nomes = ['Ana', 'Lucia', 'Claudio', 'Guilherme', 'Angelica']

for (let i = 0; i <= nomes.length ; i++){
    if (nomes[i] == 'Guilherme') {
        console.log(`Existe o Nome Guilherme na posição ` + i)
//    } else {
//        console.log('Não existe Guilherme na posição ' + i)
    }
}

// OU

if(nomes.includes("Guilherme")){
    console.log ("nome encontrado")
}