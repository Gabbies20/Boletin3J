/**
 * Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son:
➔ 50% para que salga 1
➔ 30% para que salga x
➔ 20% para que salga 2

 */

function generarQuiniela(n) {
    // Inicializa un arreglo para almacenar los resultados de la quiniela
    var quiniela = [];
  
    // Recorre n columnas
    for (var i = 0; i < n; i++) {
      // Genera un número aleatorio entre 0 y 1
      var numeroAleatorio = Math.random();
  
      // Determina el resultado de acuerdo a las probabilidades
      if (numeroAleatorio <= 0.5) {
        quiniela.push("1"); // 50% de probabilidad
      } else if (numeroAleatorio <= 0.8) {
        quiniela.push("x"); // 30% de probabilidad
      } else {
        quiniela.push("2"); // 20% de probabilidad
      }
    }
  
    return quiniela;
  }
  
  // Genera una quiniela con 10 columnas
  var quinielaGenerada = generarQuiniela(10);
  console.log("Quiniela generada: " + quinielaGenerada.join(" "));
  