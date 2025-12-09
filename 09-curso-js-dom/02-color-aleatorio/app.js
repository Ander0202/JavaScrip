// Seleccionar los elementos del DOM
const boton = document.querySelector('button');    // Obtiene el botón del documento
const color = document.getElementById('color');    // Obtiene el elemento donde se mostrará el color

// Función que genera un color aleatorio en formato hexadecimal (#RRGGBB)
function colorAleatorio() {
    let digitos = '0123456789ABCDEF';  // Todos los dígitos posibles en un color hexadecimal
    let colorHex = '#';                // Todo color hex empieza con #

    // Construir un color hex de 6 caracteres
    for (let i = 0; i < 6; i++) {
        // Genera un número aleatorio entre 0 y 15
        let indiceAleatorio = Math.floor(Math.random() * 16);
        // Agrega a colorHex el carácter que corresponde a ese índice
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;  // Retorna algo como "#A1F23C"
}

// Función que aplica el color generado al fondo y muestra su valor en pantalla
function aplicarColor() {
    const colorRandom = colorAleatorio();  // Genera un color aleatorio

    // Si existe el elemento con id "color", mostrar el valor del color ahí
    if (color) color.textContent = colorRandom;

    // Cambia el color de fondo del body al color generado
    document.body.style.backgroundColor = colorRandom;
}

// Escuchar el evento "click" del botón y ejecutar la función aplicarColor
boton.addEventListener('click', aplicarColor);
