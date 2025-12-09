/* 
Crear algoritmo que devuelva un 
array de objetos en base a pares
*/

let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}],
];

// let array = [{
//     id: 1,
//     name: 'Nicolas',
// }, {
//     id: 2,
//     name: 'Felipe',
// }, {
//     id: 3,
//     name: 'Chanchito',
// }];

function toCollection(pairs) {
    const collection = [];

    for (const item of pairs) {
        const id = item[0];
        const objeto = item[1];

        collection.push({ id: id, ...objeto
        });
    }

    return collection;
}


 let resultado = toCollection(pairs);
console.log(resultado);