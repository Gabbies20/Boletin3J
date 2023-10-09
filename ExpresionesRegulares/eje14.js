/**
 * Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.
 */

var hora = '88:45';
var regex = /^[0-9]{2}:[0-9]{2}$/;
var ver = regex.test(hora);
console.log(ver);