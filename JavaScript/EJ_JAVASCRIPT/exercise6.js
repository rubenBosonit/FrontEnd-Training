// Crea una función que redondee un número float a un número específico de decimales.
// La función debe tener dos parámetros:
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Ejemplo de uso de la función:

const roundNumber = (num, precision) => {
  let cifraRedondeada = "";

  let separacion = "";
  let sParteEntera = num.toString();
  let sDecimales = "";
  if (num.toString().includes(".")) {
    separacion = num.toString().split(".");
    sParteEntera = separacion[0].toString();
    sDecimales = separacion[1].toString();
  }

  let decimalRedondeado;

  if (precision > 0 && precision < sDecimales.length) {
    let cifraARedondear = parseInt(sDecimales.charAt(precision - 1));

    if (parseInt(sDecimales.charAt(precision)) >= 5) {
      cifraARedondear++;
    }

    let decimalesRedondeados;
    decimalesRedondeados = sDecimales.substring(0, precision - 1);
    decimalRedondeado = decimalesRedondeados + cifraARedondear;
    cifraRedondeada = sParteEntera + "." + decimalRedondeado;
    return cifraRedondeada;
  } else if (precision > 0 && precision == sDecimales.length) {
    return sParteEntera + "." + sDecimales;
  } else if (precision > 0 && precision > sDecimales.length) {
    return sParteEntera + "." + sDecimales;
  } else if (precision == 0 && sDecimales.length >= 1) {
    if (parseInt(sDecimales.charAt(0)) > 5) {
      let primeraCifraRedondeada =
        parseInt(sParteEntera.charAt(sParteEntera.length - 1)) + 1;

      if (sParteEntera.length > 1) {
        let parteEnteraSinPrimeraCifra = sParteEntera.substring(
          0,
          sParteEntera.length - 1
        );
        return parteEnteraSinPrimeraCifra + primeraCifraRedondeada;
      }
      return primeraCifraRedondeada;
    } else {
      return sParteEntera;
    }
  } else if (precision >= 0 && sDecimales.length == 0) {
    return sParteEntera;
  } else {
    return "La precision debe ser un número mayor o igual a 0";
  }
};

console.log(roundNumber(231, 0));
