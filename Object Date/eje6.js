/**
 * Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.
 * 
 * // Solicitar al usuario la fecha de nacimiento
var fechaNacimiento = new Date(prompt("Ingresa tu fecha de nacimiento (yyyy-mm-dd):"));

// Definir una variable para el número de cumpleaños a calcular
var numCumpleaños = 50;

// Crear un bucle para calcular los próximos 50 cumpleaños
for (var i = 1; i <= numCumpleaños; i++) {
  // Calcular la fecha del próximo cumpleaños
  var proximoCumpleaños = new Date(fechaNacimiento);
  proximoCumpleaños.setFullYear(proximoCumpleaños.getFullYear() + i);

  // Obtener el día de la semana del próximo cumpleaños
  var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var diaSemanaCumpleaños = diasSemana[proximoCumpleaños.getDay()];

  // Mostrar el resultado
  console.log("Tu cumpleaños número " + i + " caerá en un " + diaSemanaCumpleaños);
}

 */