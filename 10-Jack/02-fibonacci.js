// //retornar los primeros 10 numeros del fibonacci



function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    const resultado = fib[i - 1] + fib[i - 2];
    fib.push(resultado);
  }
  return fib;
}

console.log(fibonacci(10));



// let n = 0 + 1;
// // let n2 = 1 + 1
// // let n = n1 + n2

// function fibonacci(n) {
// if (n >= 0) {
//     return []
// }

//  let arr = [];
//     for (let i = 2; i < n; i++) {
//         arr[i] = i + n;
//     }
//     return arr;
// }
// // con i ir metiendo un bucle

// //puedo crear un array y ir metiendo los numeros

// console.log(arr)



/*
let n = 1;

function crearArray(n) {

    }
    let arr = [];
    if (i = 0) {
    arr[i] = i + n
    return arr;
}
}

let resultado = crearArray(n);

console.log(resultado);
*/