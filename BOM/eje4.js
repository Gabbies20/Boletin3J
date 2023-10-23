/**
 * En un cuadro de diálogo de alerta, muestre el alto y ancho en píxeles y la profundidad de color de su pantalla. Cada valor será separado por un salto de línea.
 */
 
var pantalla = window.screen;
var mensaje = "Alto: " + pantalla.height + " píxeles\nAncho: " + pantalla.width + " píxeles\nProfundidad de color: " + pantalla.colorDepth + " bits";

alert(mensaje);