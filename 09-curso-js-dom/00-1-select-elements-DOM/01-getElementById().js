// todo este es cuando leccionamos elemntos por su id

const titulo = document.getElementById('titulo');
console.log(titulo);


//getElementById -> obtiene un elemento por su id

/* Que pasararia si hubiera varios elementos con el mismo id?
   El metodo getElementById solo devuelve el primer elemento que encuentra con ese id.
   Por eso es importante que los id sean unicos en el documento HTML.
*/

/* Si hubiera un error de tipeo en el id, el metodo getElementById devolvera null.
   Por eso es importante verificar que el id exista en el documento HTML.
*/

//propiedades utiles 
// .innerText se accede al texto que tiene el elemento
// .innerHTML se accede al contenido HTML que tiene el elemento
// .value se accede al valor de un input, select o textarea
//.tagName devuelve el nombre de la etiqueta en mayusculas


