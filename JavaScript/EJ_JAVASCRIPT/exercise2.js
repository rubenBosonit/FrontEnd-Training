// Dado un array de valores, devolver un array truthy (sin valores nulos,
// vacíos, no números, indefinidos o falsos)
const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

const convertToTruthy = (arr) => {
  return arr.filter(
    (elem) =>
      !Number.isNaN(elem) &&
      elem !== null &&
      elem !== "" &&
      elem !== undefined &&
      elem !== false
  );
};

console.log(convertToTruthy(arrDirty));
