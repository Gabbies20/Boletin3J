function imprimirHola() {
    console.log("Hola, mundo");
  }
  
  setInterval(imprimirHola, 1000); // Imprimirá "Hola, mundo" cada 1000 milisegundos (1 segundo).


        // Función para obtener la hora actual en formato HH:MM:SS
        function obtenerHoraActual() {
            const ahora = new Date();
            const hora = ahora.getHours().toString().padStart(2, '0');
            const minutos = ahora.getMinutes().toString().padStart(2, '0');
            const segundos = ahora.getSeconds().toString().padStart(2, '0');
            return hora + ":" + minutos + ":" + segundos;
        }

function actualizarReloj() {
    const horaActual = obtenerHoraActual();
    // Usar document.write para escribir la hora en el documento
    document.write("Reloj Digital - " + horaActual);
}


// Actualizar el reloj cada segundo (1000 milisegundos)
setInterval(actualizarReloj, 1000);

// Actualizar el reloj inmediatamente al cargar la página
actualizarReloj();