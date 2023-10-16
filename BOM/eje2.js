/**
 * Escribir un script que mostrará el nombre del navegador , la versión y el sistema operativo que esté utilizando. Prueba tu programa en distintos navegadores, el objeto Navigator no está estandarizado.
 * 
 * El User-Agent (Agente de Usuario) es una cadena de texto que los navegadores web y otras aplicaciones utilizan para identificarse ante los servidores web. Esta cadena proporciona información sobre el software y la plataforma del cliente (usuario) que está realizando la solicitud al servidor web. La información típicamente incluye detalles sobre el navegador web, el sistema operativo, la versión del navegador y otros datos relevantes.

El User-Agent es parte de la solicitud HTTP que el navegador envía al servidor web cuando accedes a una página web. Los servidores web utilizan esta información para adaptar el contenido y la funcionalidad de sus páginas a las capacidades y limitaciones del cliente, como asegurarse de que se sirva la versión correcta de una página web o recurso específico para un navegador en particular.
 */

var ventana_nueva = window.open('','', 'width=600 , height=400' )
var nombre_navegador = navigator.userAgent;

ventana_nueva.document.write(nombre_navegador + '<br>');