const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja');

/* nos va a retornar una colección HTML con todos los elementos que tengan ese criterio
   en este caso todos los elementos con la clase topping y fondo-naranja
*/

console.log(toppingNaranja);

//se puede aceder a sus indices como si fuera un array
console.log(toppingNaranja[0]);
console.log(toppingNaranja[1]);

//con length podemos saber cuantos elementos fueron retornados con ese metodo
console.log(toppingNaranja.length);

//Nota la lista de nodos (nodeList) se considera un objeto en JavaScript, 
// pero tiene algunas propiedades similares a un array, como length 
// y la capacidad de acceder a los elementos mediante índices. 
// Sin embargo, no tiene todos los métodos de un array, como push o pop.

console.log(typeof toppingNaranja); // Devuelve 'object'

