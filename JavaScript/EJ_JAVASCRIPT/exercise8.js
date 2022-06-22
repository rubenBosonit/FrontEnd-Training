// Crea una función que convierta un número de bytes en un formato con valores
// legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que
//  se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()).
//   Por defecto, este parámetro debe de tener un valor de 3.

//He dejado el valor por defecto del parámetro en 1 para que el resultado sea el adecuado
const fromBytesToFormattedSizeUnits = (numBytes, prec = 3) => {
  let numConversiones = 0;
  let divisor = 1000;
  let formato;
  const FORMATOS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  while (Math.abs(numBytes) / divisor >= 1) {
    numConversiones++;
    divisor *= 1000;
  }

  divisor /= 1000;
  formato = FORMATOS[numConversiones];
  return (numBytes / divisor).toPrecision(prec) + " " + formato;
};

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result1 = fromBytesToFormattedSizeUnits(123456789);
console.log(result1); // 123MB

const result2 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result2); // -12.145GB
