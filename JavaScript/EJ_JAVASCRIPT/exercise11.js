// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos
// elementos como sean especificados.
// La función debe tener dos parámetros:
// El primer parámetro es el array entero que se quiere dividir.
// El segundo parámetro es el número de elementos que deben tener los arrays en los que se
// divida el array original del primer parámetro.
// Ejemplo de uso de la función:

const splitArrayIntoChunks = (arr, length) => {
  let splittedArray = [];
  let numInicial = 0;
  let numFinal = length;
  for (let i = 0; i < parseInt(arr.length / length) + 1; i++) {
    splittedArray.push(arr.slice(numInicial, numFinal));
    numFinal += length;
    numInicial += length;
    if (numFinal > arr.length) {
      numFinal = arr.length;
    }
  }
  return splittedArray;
};

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
