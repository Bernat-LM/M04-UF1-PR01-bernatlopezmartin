/*Selecciona el formulario*/
const form = document.querySelector('form');/*Selecciona el formulario*/

/*Escucha el evento de envío del formulario*/
form.addEventListener('submit', function (event) {
  event.preventDefault(); /*Evita el envío por defecto del formulario*/

/*Muestra un mensaje de confirmación*/
  alert('Formulario enviado correctamente');
});