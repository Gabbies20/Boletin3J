/**
 * Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
 * 
 */

//Obtiene la fecha actual:
var fecha_actual = new Date();

//Obtiene la fecha de nacimiento:
var fecha_nacimiento = new Date("1994-02-01");
console.log(fecha_nacimiento.getTime());
console.log(fecha_actual.getTime());

if(fecha_nacimiento.getTime() == fecha_actual.getTime()){
  console.log(`Es la misma fecha.`);
}else if(fecha_nacimiento.getTime() > fecha_actual.getTime()){
  console.log(`Error`);
}else{
  console.log(`La fecha de ${fecha_nacimiento} no es mayor que la fecha ${fecha_actual}`);
}




  