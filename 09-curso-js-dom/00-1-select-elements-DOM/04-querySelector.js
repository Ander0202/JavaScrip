const aceitunas = document.querySelector('ul li.fondo-marron');
console.log(aceitunas);

/* 
querySelector -> obtiene el primer elemento que coincide con el selector CSS especificado
const aceitunas = document.querySelector('#aceitunas');
console.log(aceitunas); // Devuelve el primer elemento con el id 'aceitunas'
*/

/* tambien puedo usar querySelector para obtener elementos por clase o etiqueta
const topping = document.querySelector('.topping');
console.log(topping); // Devuelve el primer elemento con la clase 'topping'
este nos retorna un type objeto
*/

/* Si quiero obterner el primer elemento que tenga la clase topping y fondo-marron
const aceitunas = document.querySelector('.topping.fondo-marron');
console.log(aceitunas); 
 y el tipo de dato es un objeto (typeof)
*/

/* 
Un selector mas elaborado que contega el primer elemento que tenga la etiqueta ul dentro de li y que ademas tenga la clase fondo-marron
const aceitunas = document.querySelector('ul li.fondo-marron');
console.log(aceitunas);
*/

/* otro ejemplo para seleccionar el primer topping que no sea marron
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);
*/