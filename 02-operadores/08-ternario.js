/* Operador ternario en JavaScript

// expresión ? 'si es true' : 'si es false'


Explicación:

El **operador ternario** (`? :`) es una forma corta de escribir un `if...else`.


Estructura:

condición ? valorSiTrue : valorSiFalse

--> Si la **condición es verdadera (true)**, se ejecuta lo que está antes de los dos puntos `:`
--> Si la **condición es falsa (false)**, se ejecuta lo que está después de los dos puntos.

Ejemplo:*/

let edad = 17;
let acceso = edad > 17  ? 'Permitir ingreso' : 'No puede ingresar';
console.log(acceso);