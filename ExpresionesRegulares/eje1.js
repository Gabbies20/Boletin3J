/**
 * Comprobar que el nombre de usuario contiene al menos tres letras. Si no es así, debe
aparecer un mensaje por pantalla indicando que el texto no cumple tener al menos tres
letras. Debe aparecer el mensaje: “El nombre no cumple tener al menos tres letras”.
 */

var nombre = 'Gabriela@gmailcom';

var regex = /^[\w]+@(gmail|outlook|yahoo)\.(com|es)$/;

if(regex.test(nombre)){
    console.log(`El nombres si cumple.`);
}else{
    console.log(`No lo cumple`);
}