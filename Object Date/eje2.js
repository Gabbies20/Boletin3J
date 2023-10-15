/**
 * Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.
 * 
 */


var dia_fecha1 = 10;
var dia_fecha2 = 1;

var mes_fecha1 = 1;
var mes_fecha2 = 10;

var anio_fecha1 = 2020;
var anio_fecha2 = 2015;


if (anio_fecha1 > anio_fecha2) {
    console.log(`La segunda fecha es anterior a la primera.`);
}else if(anio_fecha1 == anio_fecha2){

  if( mes_fecha1 == mes_fecha2){
    if(dia_fecha1 == dia_fecha2){
      console.log(`Las fechas son iguales.`);
    }else if( dia_fecha1 < dia_fecha2){
      console.log(`La primera fecha es anterior a la segunda.`);
    }else{
      console.log(`La segunda fecha es anterior a la primera.`);
    }
  }else if(mes_fecha1 < mes_fecha2){
    console.log(`La primera fecha es anterior a la segunda.`);
  }else{
    console.log(`La segunda fecha es anterior a a la primera.`);
  }
}












