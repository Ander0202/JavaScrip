let palabraOriginal = 'oso';
console.log(palabraOriginal)


function palindromo(palabraOriginal) {
let palabraInversa = palabraOriginal.split('').reverse().join('')
if (palabraOriginal === palabraInversa) {
    return `${palabraOriginal} = ${palabraInversa} Es un palindromo`;
} else {
    return `${palabraOriginal} = "${palabraInversa}" No es un palindromo`;
}
}

let resultado = palindromo(palabraOriginal)
console.log(resultado)