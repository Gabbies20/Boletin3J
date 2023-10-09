/**
 * Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
 */

var texto = '    Hola mama hoy comemos    arroz         .';
var texto_sin_punto = texto.replace(/\.$/,'');
document.write(`<br>Texto sin punto: ${texto_sin_punto}`)

var usar_split = texto_sin_punto.trim().split(/\s+/g);
console.log(`${texto_sin_punto}`)
console.log(`Split: ${usar_split.length}`)