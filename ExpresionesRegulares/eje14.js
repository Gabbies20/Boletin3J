/**
 * Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
 */

var hora = '88:45';
var regex = /^[0-9]{2}:[0-9]{2}$/;
var ver = regex.test(hora);

var horas = hora.substring(0,2);
var minutos = hora.substring(2);
console.log(`Las horas son: ${horas}`);
console.log(`Los minutos son: ${minutos}`);
console.log(ver);