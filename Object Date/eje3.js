/**
 * Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.

*/


var tiempo_segundos= 3665;

var horas = Math.floor(tiempo_segundos / 3600);
var minutos = Math.floor((tiempo_segundos % 3600)/60);
var segundos = Math.floor(tiempo_segundos % 60)


console.log(`La cantidad de horas es: ${horas}`);
console.log(`La cantidad de minutos es: ${minutos}`);
console.log(`La cantidad de segundos es: ${segundos}`);