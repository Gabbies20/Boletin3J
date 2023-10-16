/**
 * En una nueva ventana, imprimir todas las propiedades del objeto navigator.
 
// Abre una nueva ventana
const nuevaVentana = window.open('', 'NuevaVentana', 'width=600, height=400');

// Función para imprimir las propiedades del objeto navigator en la nueva ventana
function imprimirPropiedadesNavigator() {
    const properties = [];
    for (const property in navigator) {
        properties.push(property + ': ' + navigator[property]);
    }
    
    // Crea un elemento de párrafo en la nueva ventana y muestra las propiedades
    const p = document.createElement('p');
    p.textContent = properties.join('\n');
    nuevaVentana.document.body.appendChild(p);
}

// Llama a la función para imprimir las propiedades del objeto navigator
imprimirPropiedadesNavigator();

*/

const nueva_ventana = window.open('','Ventana', 'width=600 , height=400');

for(const propiedad in navigator){
    nueva_ventana.document.write(navigator[propiedad])
}
