/**
 * Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
 * 
 */

var fecha1 = new Date("2001-01-02");
var fecha2 = new Date("2015-02-06");
var fecha3 = new Date("1990-05-02");
var fechas = [fecha1.getTime(),fecha2.getTime(),fecha3.getTime()];

var fecha_mayor = fechas[0];
var fecha_menor = fechas[0];

console.log(fechas);

for (let index = 0; index < fechas.length; index++) {
  const element = fechas[index];
  console.log(element);
  if(fechas[index] < fecha_menor){
    fecha_menor = fechas[index];
  }
  if(fechas[index] > fecha_mayor){
    fecha_mayor = fechas[index];
  }

  
}

console.log(fecha_menor);
console.log(fecha_mayor);