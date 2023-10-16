/**
 * Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
 * 
 */

var matricula_usuario = 'abc1234'.toUpperCase();
var regex_letras = /^[A-Z]{3}[0-9]{4}$/i;

if(regex_letras.test(matricula_usuario)){
    var resultado = matricula_usuario.substring(0,3);
    var resultado_numeros = matricula_usuario.substring(3);
    var formato = `${resultado}-${resultado_numeros}`
    document.write(`Su matricula es: ${formato}`);
}else{
    document.write(`La matricula es erronea, su formato debe ser: ABC-1234`);
}




