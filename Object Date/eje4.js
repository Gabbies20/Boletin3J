/**
 * Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
 * 
 * function calcularFechas(fechas) {
  if (fechas.length === 0) {
    return "No hay fechas para calcular.";
  }

  // Encontrar la fecha menor
  var fechaMenor = new Date(Math.min.apply(null, fechas));

  // Encontrar la fecha mayor
  var fechaMayor = new Date(Math.max.apply(null, fechas));

  // Calcular la diferencia en segundos
  var diferenciaEnSegundos = Math.abs((fechaMayor - fechaMenor) / 1000);

  return {
    fechaMenor: fechaMenor,
    fechaMayor: fechaMayor,
    diferenciaEnSegundos: diferenciaEnSegundos,
  };
}

function calcularFechas(fechas) {
  if (fechas.length === 0) {
    return "No hay fechas para calcular.";
  }

  // Inicializar con la primera fecha del arreglo
  var fechaMenor = fechas[0];
  var fechaMayor = fechas[0];

  // Recorrer el arreglo para encontrar la fecha menor y la fecha mayor
  for (var i = 1; i < fechas.length; i++) {
    if (fechas[i] < fechaMenor) {
      fechaMenor = fechas[i];
    }
    if (fechas[i] > fechaMayor) {
      fechaMayor = fechas[i];
    }
  }

  // Calcular la diferencia en segundos
  var diferenciaEnSegundos = Math.abs((fechaMayor - fechaMenor) / 1000);

  return {
    fechaMenor: fechaMenor,
    fechaMayor: fechaMayor,
    diferenciaEnSegundos: diferenciaEnSegundos,
  };
}

// Ejemplo de uso
var fechas = [
  new Date('2023-01-15'),
  new Date('2023-05-20'),
  new Date('2023-02-10'),
  new Date('2023-03-30'),
];

var resultados = calcularFechas(fechas);

console.log("Fecha menor: " + resultados.fechaMenor);
console.log("Fecha mayor: " + resultados.fechaMayor);
console.log("Diferencia en segundos: " + resultados.diferenciaEnSegundos + " segundos");


 */