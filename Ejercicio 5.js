// 5. Suma de elementos de un arreglo
// Torres Reyes Jaime Camil
function sumarElementos(arreglo) {
    return arreglo.reduce((suma, numero) => suma + numero, 0);
}

const numerosParaSumar = [5, 2, 9, 1, 7];
console.log("Suma de elementos:", sumarElementos(numerosParaSumar));