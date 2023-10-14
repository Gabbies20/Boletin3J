/**
 * Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
 */

function calcularNumeroTarot(fechaNacimiento) {
    // Obtener la fecha actual
    var fechaActual = new Date();
  
    // Comprobar si la fecha de nacimiento es mayor que la fecha actual
    if (fechaNacimiento > fechaActual) {
      return "La fecha de nacimiento no puede ser mayor que la fecha actual.";
    }
  
    // Calcular el número del Tarot (puedes usar el algoritmo que prefieras)
    var numeroTarot = calcularNumeroTarotAlgoritmo(fechaNacimiento);
  
    return numeroTarot;
  }
  
  function calcularNumeroTarotAlgoritmo(fechaNacimiento) {
    // Implementa aquí el algoritmo para calcular el número del Tarot
    // Puedes usar el algoritmo que prefieras para calcularlo
  
    // Ejemplo de algoritmo ficticio que simplemente suma los dígitos de la fecha
    var fechaStr = fechaNacimiento.toString();
    var sumaDigitos = fechaStr.split('').filter(char => char >= '0' && char <= '9').map(Number).reduce((a, b) => a + b, 0);
  
    return sumaDigitos;
  }
  
  // Ejemplo de uso
  var fechaNacimiento = new Date('1990-10-15'); // Reemplaza con la fecha de nacimiento que desees
  var numeroTarot = calcularNumeroTarot(fechaNacimiento);
  
  console.log("Número del Tarot: " + numeroTarot);
  