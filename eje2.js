/**
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