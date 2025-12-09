/*
Crear algoritmo que devuelva
el precio del producto
más impuesto
*/

function precioCompleto(precio, impuestos) {
    let a = precio;
    let b = impuestos;
    return a *(b) + a;
}

/*
function precioCompleto(precio, impuestos) {
    return precio + (precio * impuesto);
}
*/

let resultado = precioCompleto (19.90, 0.15);
console.log(resultado)