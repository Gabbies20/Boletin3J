/**
 * Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.
 */

// Solicitar al usuario un tiempo en segundos
var tiempoEnSegundos = parseInt(prompt("Ingresa un tiempo en segundos:"));

// Calcular horas, minutos y segundos
var horas = Math.floor(tiempoEnSegundos / 3600);
var minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
var segundos = tiempoEnSegundos % 60;

// Presentar el resultado en pantalla
console.log("El tiempo ingresado en horas, minutos y segundos es:");
console.log("Horas: " + horas);
console.log("Minutos: " + minutos);
console.log("Segundos: " + segundos);
