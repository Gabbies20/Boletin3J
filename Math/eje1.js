/**
 * Hacer un programa que muestre un menú de opciones con las siguientes operaciones posibles:
Redondeo a su inmediato superior de un número
Redondeo a su inmediato inferior de un número
Redondeo al número más cercano
Cálculo del número máximo entre dos dados
Cálculo del número mínimo entre dos dados
Cálculo de un número elevado a otro
Cálculo de la raíz cuadrada de un número

 */

var opcion = prompt("Indique la opcion: \n 1.Redondeo a su inmediato superior de un número \n 2.Redondeo a su inmediato inferior de un número \n 3.Redondeo al número más cercano \n 4.Cálculo del número máximo entre dos dados \n 5.Cálculo del número mínimo entre dos dados \n 6. Cálculo de un número elevado a otro \n 7.Cálculo de la raíz cuadrada de un número");
var numero = 42.12;
var numero2 = 15;
switch (opcion) {
    case '1':

        console.log(Math.ceil(numero));
        
        break;
    case '2':

        console.log(Math.floor(numero));
        
        break;
    case '3':

        console.log(Math.round(numero));
        
        break;
    case '4':

        console.log(Math.max(numero,numero2));
        
        break;
    case '5':

        console.log(Math.ceil(numero));
        
        break;
    case '6':

        console.log(Math.ceil(numero));
        
        break;
    case '7':

        console.log(Math.ceil(numero));
        
        break;

    default:
        break;
}