/**
 * Crear un programa que va a crear un reloj digital en el título. Utilice el método setInterval() para actualizar el título de la página una vez cada minuto con la hora actual.
 * 
 * Ejemplo básico de setInterval():
 * 
function imprimirHola() {
    console.log("Hola, mundo");
  }

setInterval(imprimirHola, 1000); // Imprimirá "Hola, mundo" cada 1000 milisegundos (1 segundo).
 */

        // Función para obtener la hora actual en formato HH:MM:SS
        function obtenerHoraActual() {
            const ahora = new Date();
            const hora = ahora.getHours().toString().padStart(2, '0');
            const minutos = ahora.getMinutes().toString().padStart(2, '0');
            const segundos = ahora.getSeconds().toString().padStart(2, '0');
            return hora + ":" + minutos + ":" + segundos;
        }

        // Función para actualizar el título con la hora actual
        function actualizarReloj() {
            const horaActual = obtenerHoraActual();
            document.title = "Reloj Digital - " + horaActual;
        }

        // Actualizar el reloj cada minuto (60,000 milisegundos)
        setInterval(actualizarReloj, 60000);

        // Actualizar el reloj inmediatamente al cargar la página
        actualizarReloj();
    