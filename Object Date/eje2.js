/**
 * Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.
 * 
 * function compararFechas(fecha1, fecha2) {
  // Extraer los componentes de las fechas
  const dia1 = fecha1.dia;
  const mes1 = fecha1.mes;
  const anio1 = fecha1.anio;

  const dia2 = fecha2.dia;
  const mes2 = fecha2.mes;
  const anio2 = fecha2.anio;

  // Comparar primero los años
  if (anio1 < anio2) {
    return "La primera fecha es anterior a la segunda.";
  } else if (anio1 > anio2) {
    return "La segunda fecha es anterior a la primera.";
  }

  // Si los años son iguales, comparar los meses
  if (mes1 < mes2) {
    return "La primera fecha es anterior a la segunda.";
  } else if (mes1 > mes2) {
    return "La segunda fecha es anterior a la primera.";
  }

  // Si los años y los meses son iguales, comparar los días
  if (dia1 < dia2) {
    return "La primera fecha es anterior a la segunda.";
  } else if (dia1 > dia2) {
    return "La segunda fecha es anterior a la primera.";
  }

  // Si todas las partes de las fechas son iguales, las fechas son idénticas
  return "Ambas fechas son iguales.";
}

// Ejemplo de uso
const fecha1 = { dia: 15, mes: 10, anio: 2023 };
const fecha2 = { dia: 20, mes: 5, anio: 2023 };

const resultado = compararFechas(fecha1, fecha2);
console.log(resultado);

 */
