// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy”
// después de ser ejecutados por una función específica.
// La fundación debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que
// aplicar al objeto del primer parámetro

const returnFalsyValues = (obj, callback) => {
  let objConCamposFalsy = {};
  let claves = Object.keys(obj);
  for (let i = 0; i < claves.length; i++) {
    if (!callback(obj[claves[i]])) {
      objConCamposFalsy[claves[i]] = obj[claves[i]];
    }
  }
  return objConCamposFalsy;
};

const result = returnFalsyValues(
  { a: 1, b: "2", c: 3 },
  (x) => typeof x === "string"
);

console.log(result);
