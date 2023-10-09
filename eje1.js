/**
 * Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
 
var nombres = prompt("Escribe nombre: ").toUpperCase();
var total_nombres = 0;
var total_inician_conC = 0;
var contieneEnie = 0;

while(nombres != 'ULTIMO'){
    total_nombres++;
    if(nombres.charAt(0)== 'C'){
        total_inician_conC++;
    }
    if(nombres.includes('Ñ')){
        contieneEnie++;
    }
    nombres = prompt("Escribe nombre: ").toUpperCase();
}
document.write(`El total de nombres es: ${total_nombres}.`);
document.write(`<br>El total de nombres que empiezan con C son: ${total_inician_conC}.`);
document.write(`<br>El total de nombres que contiene 'Ñ' son: ${contieneEnie}.`)
*/

var cadena = 'Carmen Caña Celeste Gabriela';
//var palabras = cadena.split(' ');
var regex = /C/i;
var regex2 = /(\w+\s|\w+$)/gi;
var comienzan_conC = 0;


var coincidencias = regex.exec(cadena);


for (let i = 0; i < palabras.length; i++){
    console.log(i);
    if(regex.test(palabras[i])){
        comienzan_conC++;
    }
}
document.write(palabras);
document.write(`<br> ${comienzan_conC}`)

