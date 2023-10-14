/**
 * Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)
 */

var coordenada = '2521,999';
var regex = /^[0-9]{1,3},[0-9]{1,3}$/
//var comprobacion_coordenada = regex.test(coordenada);
//console.log(comprobacion_coordenada)

if(regex.test(coordenada)){
    console.log("La coordenada es correcta.");
}else{
    console.log("La coordanda ingresada es incorrecta, utilice el formato (999,999).");
}