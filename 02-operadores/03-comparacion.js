//Variable
let a = 10;

//COMPARADORES RELACIONALES
console.log (a > 5);  
console.log (a >= 5);
console.log (a < 5);
console.log (a <= 5);

//COMPARADORES DE IGUALDAD
console.log(a == 10);   //--> Se evalua que la variable "a" es igual a el valor de 10 --> verdadero
console.log(a != 10);   //--> Se evalua si la variable "a" es distinta a el valor de 10 --> siendo falso

// NOTA: si comparo "a" con el string de '10' usando el simbolo de " == " compara el VALOR, pero NO el TIPO
console.log(a === '10') // Preguntar si el valor y el tipo son iguales usar triple igualdad
console.log(a !== '10') // Preguntar si el valor y el tipo son distintos 

/*
 * Se recomienda usar
 * === 
 * !==
 * 
 * Debido a que: 
 * ==
 * != 
 * estos simbolos pueden generar errores
*/

