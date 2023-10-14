/**
 * Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.
 */

// Obtener la fecha actual
var fechaActual = new Date();

// Solicitar al usuario la fecha de nacimiento
var fechaNacimiento = new Date(prompt("Ingresa tu fecha de nacimiento (yyyy-mm-dd):"));

// Obtener el año actual y el año de nacimiento
var añoActual = fechaActual.getFullYear();
var añoNacimiento = fechaNacimiento.getFullYear();

// Calcular la fecha del próximo cumpleaños
var proximoCumpleaños = new Date(añoActual, fechaNacimiento.getMonth(), fechaNacimiento.getDate());

if (proximoCumpleaños < fechaActual) {
  proximoCumpleaños.setFullYear(añoActual + 1);
}

// Calcular la diferencia en días
var unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
var diasFaltantes = Math.floor((proximoCumpleaños - fechaActual) / unDiaEnMilisegundos);

// Comprobar si es el día de cumpleaños
if (diasFaltantes === 0) {
  console.log("¡Felicidades! Hoy es tu cumpleaños.");
} else {
  console.log("Faltan " + diasFaltantes + " días para tu próximo cumpleaños.");
}
