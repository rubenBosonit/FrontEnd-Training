// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose
// que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función://
const myObject = { NamE: "Charles", ADDress: "Home Street" };

const toLowercaseKeys = (obj) => {
  for (let [key, value] of Object.entries(obj)) {
    myObject[key.toLowerCase()] = value;
    delete myObject[key];
  }
  return obj;
};
console.log(toLowercaseKeys(myObject));
