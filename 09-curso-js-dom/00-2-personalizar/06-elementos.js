/**
 * ==============
 * Crear Elemento
 * ==============
 */

const listaDeToppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');

// Agregar Elemento

toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Albaca';

listaDeToppings.append(toppingNuevo); // Nos permite agregar un nodo dentro de otro elemento
//appendChild tambien se puede usar

// Eliminar Elemento
toppingNuevo.remove();
listaDeToppings.remove()