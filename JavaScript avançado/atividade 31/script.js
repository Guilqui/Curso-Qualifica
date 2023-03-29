const arr1 = [1,2,3,4,5,6,7]
const arr2 = [1,2,3,4]

total = (i) => {
    if ( i.length > 5) {
        console.log('Maior que 5 elementos')
    } if (i.length < 5) {
        console.log('Menos que 5 elementos')
    }
}

total(arr2)