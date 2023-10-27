/**
 * Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es.
 */

function numeroPerfecto(numero){
    for(let i = 0; i>=numero; i++ ){
        var divisores = numero % i;
       return  divisores;
    }
};

console.log(numeroPerfecto(6));