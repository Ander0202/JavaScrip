let animales = ['cerdo', 'caballo'] /*array literal*/

console.log(animales);
console.log(animales[0]); /* indice 0 para pasar a este elemento "CERDO" */
animales[2] = 'dragon'; /*agregar elementos*/
console.log(animales);

/* Cuidado al agregar elementos a los arreglos por ejemplo
se puede pasar un idice que no haga sentido */

animales[10] = 'Pez';
console.log(animales)
// quedaron 7 espacios sin valor

console.log(animales[7]) /* no tiene valor undefine (tipo objeto) */
console.log(typeof animales);
console.log(animales.length);


