/**
 * Escribir un subprograma que produzca una tabla de valores de la ecuación:

Donde ​t varía entre 0 y 60. El valor del incremento de ​t será introducido como parámetro de entrada.

 */

function generarTablaDeValores(incrementoDeT) {
    console.log("t\t| y");
    console.log("-------------------");
    
    for (var t = 0; t <= 60; t += incrementoDeT) {
      var y = 5 * t ** 2 + 3 * t + 2;
      console.log(t + "\t| " + y);
    }
  }
  
  // Llamando a la función con un incremento de t de 5 unidades
  generarTablaDeValores(5);
  