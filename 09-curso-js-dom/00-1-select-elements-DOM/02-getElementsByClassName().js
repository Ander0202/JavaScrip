/* con el metodo .getElementByClassName se pueden obtener todos los elementos que tienen una clase especifica.
   Devuelve una coleccion de nodos (HTMLCollection) que se puede recorrer con un for.
   No es recomendable usar este metodo porque no devuelve un array, sino una coleccion de nodos.
   Es mejor usar querySelectorAll para obtener todos los elementos que tienen una clase especifica.
*/
const topping = document.getElementsByClassName('topping');
console.log(topping[0]);

//getElementByClassName -> obtiene todos los elementos que tienen una clase especifica 

// const topping = document.getElementsByClassName('topping');
// console.log(topping.length); // Devuelve la cantidad de elementos con la clase 'topping'


/* SI QUIERO ADCEDER A UN SOLO ELEMENTO 
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]); // Accede al primer elemento con la clase 'topping'
console.log(toppings[1]); // Accede al segundo elemento con la clase 'topping'

si quiero obtener su id solo hago console.log(toppings[0].id) 
*/ 

