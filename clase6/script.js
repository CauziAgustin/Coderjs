
//getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]
//getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

function retornaPares(arrayNumeros){
    const arrayPares = [];
    for(let i=0; i <arrayNumeros.length; i++){
        if (arrayNumeros[i]%2 == 0){
            arrayPares.push(arrayNumeros[i]);
        }
    }

    console.log(arrayPares);
}