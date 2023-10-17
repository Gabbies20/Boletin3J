/**
 * Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.
 */


var fecha_proximo_cumpleaños = new Date('2024-02-23');
var fecha_actual = new Date();


console.log(fecha_proximo_cumpleaños.getTime());
console.log(fecha_actual.getTime());

var resta_fechas = fecha_proximo_cumpleaños.getTime()-fecha_actual.getTime();

var horas = ((resta_fechas/1000)/60)/60;
console.log(resta_fechas);
console.log(Math.floor(horas/24));