/**
 * Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.

 */

var fecha_actual = new Date();
var fecha_nacimiento_usuario = new Date('1994-02-23');

// Calcula el próximo cumpleaños
var proximo_cumpleaños = new Date(fecha_actual.getFullYear(), fecha_nacimiento_usuario.getMonth(), fecha_nacimiento_usuario.getDate());

if (proximo_cumpleaños < fecha_actual) {
    proximo_cumpleaños.setFullYear(proximo_cumpleaños.getFullYear() + 1);
}

for (let index = 0; index < 50; index++) {
    var nombre_dia;

    if(proximo_cumpleaños.getDay() === 0){
      nombre_dia = 'Domingo';
    }else if (proximo_cumpleaños.getDay() === 1){
      nombre_dia = 'Lunes';
    }else if(proximo_cumpleaños.getDay() === 2){
      nombre_dia = 'Martes';
    }else if( proximo_cumpleaños.getDay() === 3){
      nombre_dia = 'Miercoles';
    }else if(proximo_cumpleaños.getDay() === 4){
      nombre_dia = 'Jueves';
    }else if(proximo_cumpleaños.getDay() === 5){
      nombre_dia = 'Viernes';
    }else{
      nombre_dia = 'Sábado'
    }

    document.write(`En el año ${proximo_cumpleaños.getFullYear()}, el dia de su cumpleaños es: ${nombre_dia} <br>`)
    // Añade un año al próximo cumpleaños
    proximo_cumpleaños.setFullYear(proximo_cumpleaños.getFullYear() + 1);
}

