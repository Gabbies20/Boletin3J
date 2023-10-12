/**
<<<<<<< HEAD
 * Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
 */

var nombres = 'Carmen carla Juan Camila Gabriela ';

var regex = /[a-zA-Z]{3,}/g
var regex2 = /C/i;
var division_nombres = nombres.match(regex);
var comienzan_nombresC = 0;
//document.write(division_nombres.length)

for(let i = 0; i < division_nombres.length; i++){
    console.log((division_nombres[i]));
    if(regex2.test(division_nombres[i])) { 
        comienzan_nombresC++;
    }
}
document.write(`La cantidad totral de nombres es: ${division_nombres.length}`);
document.write(`<br>La cantidad de nombres que comienzan con c son: ${comienzan_nombresC}`)
=======
 * Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
 */

var texto = '    Hola mama hoy comemos    arroz         .';
var texto_sin_punto = texto.replace(/\.$/,'');
document.write(`<br>Texto sin punto: ${texto_sin_punto}`)

var usar_split = texto_sin_punto.trim().split(/\s+/g);
console.log(`${texto_sin_punto}`)
console.log(`Split: ${usar_split.length}`)
>>>>>>> 3f333d6d95cdfd275756ea32ded6f13cefe96984
