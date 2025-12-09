/* existen 3 tipos de operadores logicos en JS
AND, OR; NOT */

/*  AND &&      El operador AND (&&) devuelve true solo si ambas condiciones son verdaderas.
Si una de ellas es false, el resultado será false */

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false


// OR (||) → Devuelve true si al menos una de las condiciones es verdadera
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) → Invierte el valor lógico: true se vuelve false y viceversa
console.log(!true)  // false
console.log(!false) // true


//EJEMPLO plataforma de streaming

let mayor = false
let suscrito = true

console.log('operador and', mayor && suscrito);
console.log('operador or', mayor || suscrito);
console.log('operador not',!mayor);

let soloCatalogoInfantil = !mayor;
let todosLosCatalogos = mayor || suscrito;

console.log('catalogoAdulto', mayor && suscrito)
console.log('soloCatalogoInfantil', !mayor && suscrito);
console.log('todosLosCatalogos', mayor && suscrito)


