/* 
Crear algoritmo que tome un array de 
objetos y devuelva un array de pares
*/

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

// let pares = [
//     [1, { id: 1, name: "Nicolas"}],
//     [2, { id: 2, name: "Felipe"}],
//     [3, { id: 3, name: "Chanchito"}],
// ];

// function toPairs(arr) {
//        let pairs = [];
//        for (idx in arr) {
//         let elemento = arr[idx]
//         pairs[idx] = [elemento.id, elemento];
//        }
//     return pairs;
// }

function toPairs(arr) {
    const pairs = [];
    for (const item of arr) {
        if (item == null || typeof item.id === 'undefined') continue; // salta si no hay id
        pairs.push([item.id, item]);
    }
    return pairs
}


let resultado = toPairs(array);
console.log('resultado: ', JSON.stringify(resultado));