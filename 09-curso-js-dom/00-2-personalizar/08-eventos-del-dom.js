/* Elemento target (blanco) diana objetivo
Trigger (desencadenar)
Event Handler (manejar evento)
event Listener (escuchar evento) conexion evento y funcion
*/

// Eventos con onEvent
function mostrarClic(topping) {
  console.log(topping);
}

// Ejemplo en HTML
// <ul id="lista-toppings">
//   <li onclick="mostrarClic('Aceitunas')" class="topping fondo-marron" id="aceitunas">Aceitunas</li>
//   <li onclick="mostrarClic('Champiñones')" class="topping fondo-naranja" id="champiñones">Champiñones</li>
//   <li onclick="mostrarClic('Pepperoni')" class="topping fondo-marron">Pepperoni</li>
//   <li onclick="mostrarClic('Salami')" class="topping fondo-naranja">Salami</li>
// </ul>

// .addEventListener()
const toppings = document.getElementsByClassName('topping');

function mostrarClic(e) {
  console.log(e.target.innerText);
}

for (const topping of toppings) {
  topping.addEventListener('click', mostrarClic);
}