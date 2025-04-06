/*Selecciona el formulario*/
const form = document.querySelector('form');/*Selecciona el formulario*/

/*Escucha el evento de envío del formulario*/
form.addEventListener('submit', function (event) {
  event.preventDefault(); /*Evita el envío por defecto del formulario*/

/*Muestra un mensaje de confirmación*/
  alert('Formulario enviado correctamente');
});

// Selecciona el elemento <header>
const header = document.querySelector('#header');

// Agrega un evento de clic al <header>
header.addEventListener('click', () => {
  // Cambia el color de fondo del <header>
  header.style.backgroundColor = '#212121';
  header.style.color = '#ffc107'; 
});