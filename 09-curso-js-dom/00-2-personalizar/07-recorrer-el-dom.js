const listaDeTopping = document.getElementById('lista-toppings');

// SI se necesita realizar alguna operacion con el elemento o nodo padre
console.log(listaDeTopping.parentNode); 
console.log(listaDeTopping.parentElement);
console.log(listaDeTopping.parentNode.parentNode); // para saber el padre del elemento padre
console.log(listaDeTopping.children); // conocer los elementos hijos
console.log(listaDeTopping.firstChild); // Saldra Text porque toma el primer nodo
console.log(listaDeTopping.children[0]); // selecciona el primer elemento html
console.log(listaDeTopping.lastChild); // pero tambien retorna text
console.log(listaDeTopping.firstElementChild); // mas usado
console.log(listaDeTopping.lastElementChild); // mas usado
console.log(listaDeTopping.previousElementSibling) // Ver el hermano anterior
console.log(listaDeTopping.nextElementSibling) // ver proximo hermano
console.log(listaDeTopping.nextSibling) // Para Nodos posteriores, pero retorna text por los espacios
console.log(listaDeTopping.previousSibling) // Para Nodos anteriores, pero retorna text por los espacios