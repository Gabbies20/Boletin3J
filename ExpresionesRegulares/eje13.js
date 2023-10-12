/**
 * Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, no existe un código postal en España que empiece por 53 o superior.
 */

var codigo_postal = 53345;
var regex = /^[0-9]{5}$/;

if(regex.test(codigo_postal)){
    if (codigo_postal <= 52999){
        console.log(`El código es correcto.`);
    }else{
        console.log(`No existe un codigo en España que empiece por 53.`);
}
}