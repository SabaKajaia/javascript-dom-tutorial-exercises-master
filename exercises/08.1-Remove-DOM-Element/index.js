// Selecciona el elemento que deseas eliminar
let secondElement = document.querySelector('#secondElement');

// Selecciona el elemento padre (en este caso, la <ul>)
let parentElement = secondElement.parentNode;

// Elimina el elemento deseado de su padre
parentElement.removeChild(secondElement);
