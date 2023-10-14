/**
 * Generar aleatoriamente una primitiva de n columnas..
 * 
 * Para generar aleatoriamente una combinación de números para una Primitiva con n columnas, puedes utilizar JavaScript para realizar este proceso. Aquí tienes un ejemplo de cómo hacerlo:

Define el rango de números que se pueden utilizar en la Primitiva (por ejemplo, del 1 al 49).

Define la cantidad de números que deben seleccionarse en cada columna (normalmente son 6 números principales y 1 número adicional, pero esto puede variar según las reglas específicas de la lotería).

Para cada columna, genera un conjunto de números aleatorios dentro del rango definido. Asegúrate de que los números sean únicos en cada columna y estén en orden ascendente.

Repite estos pasos para el número deseado de columnas (n).

Aquí hay un ejemplo de código en JavaScript que genera una combinación aleatoria de números para una Primitiva con n columnas:
 */

function generarPrimitiva(n, numerosPorColumna) {
    var rangoMinimo = 1;
    var rangoMaximo = 49;
    var primitiva = [];
  
    for (var i = 0; i < n; i++) {
      var columna = [];
      
      // Genera los números principales
      for (var j = 0; j < numerosPorColumna; j++) {
        var numeroAleatorio;
        do {
          numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
        } while (columna.includes(numeroAleatorio));
        columna.push(numeroAleatorio);
      }
  
      // Ordena los números de manera ascendente
      columna.sort(function (a, b) {
        return a - b;
      });
  
      // Agrega el número adicional
      var numeroAdicional = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
      columna.push(numeroAdicional);
  
      // Agrega esta columna a la Primitiva
      primitiva.push(columna);
    }
  
    return primitiva;
  }
  
  // Genera una Primitiva con 1 columna y 7 números
  var primitivaGenerada = generarPrimitiva(1, 7);
  
  // Imprime la Primitiva generada
  console.log("Primitiva generada:");
  for (var i = 0; i < primitivaGenerada.length; i++) {
    console.log("Columna " + (i + 1) + ": " + primitivaGenerada[i].join(", "));
  }
  