/**
 * Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
 * 
 * 
;


var comprobacion = regex.test(matricula_usuario); 
var matricula = matricula_usuario.match(regex);

console.log(`La matricula es: ${matricula.length}`);
console.log(comprobacion);
 */

var matricula_usuario = 'abcd1234'.toUpperCase();
var regex_letras = /^[A-Z]{3}[0-9]{4}$/i;

if(regex_letras.test(matricula_usuario)){
    console.log(`La matricula es correcta.`);

    var resultado = matricula_usuario.substring(0,3);
    var resultado_numeros = matricula_usuario.substring(3);
    console.log(resultado);
    console.log(resultado_numeros);
    document.write(`El formato es ${resultado}-${resultado_numeros}`)
}else{
    document.write(`La matricula es erronea, su formato debe ser: ABC-1234`);
}




