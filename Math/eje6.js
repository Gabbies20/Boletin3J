/**
 * Realizar un programa que generalice el algoritmo del Tarot para un número de cualquier cantidad de cifras. Ejemplo: 999999999999999999999=9+.....9+9+9= 189 = 18 = 9.  (Pista: Usar log en base 10. No es obligatorio usarla).
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
Para generalizar el algoritmo del Tarot para un número con cualquier cantidad de cifras, puedes crear un programa en JavaScript que sume repetidamente los dígitos del número hasta que obtengas un solo dígito. Puedes hacer esto utilizando un bucle y la función reduce() de JavaScript para sumar los dígitos. A continuación, te muestro un ejemplo de cómo hacerl
 */


function tarot(numero) {
    // Convierte el número a una cadena para trabajar con los dígitos
    var numeroStr = numero.toString();
  
    while (numeroStr.length > 1 && numeroStr !== '9') {
      // Divide el número en sus dígitos y suma los dígitos
      var sumaDigitos = numeroStr.split('').map(Number).reduce((a, b) => a + b, 0);
  
      // Convierte la suma de dígitos nuevamente en una cadena
      numeroStr = sumaDigitos.toString();
    }
  
    return parseInt(numeroStr);
  }
  
  // Ejemplo de uso
  var numero = 999999999999999999999;
  var resultado = tarot(numero);
  console.log("Número original: " + numero);
  console.log("Número del Tarot: " + resultado);
  
  
