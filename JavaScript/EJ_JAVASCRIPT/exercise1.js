//Dado un array de objetos,obtener el objeto con el id 3
const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

const getObjectById = function (arrNames) {
  return arrNames.find((element) => element.id === 3);
};

console.log(getObjectById(arrNames));
