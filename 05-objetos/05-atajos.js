let obj = {}
let obj2 = new Object();

/*
new array (); [
new String (); "" '' ´´
new Number(); 12
new Boolean (); true false
*/

function Usuario () {
    this.name = 'Anderson';
}
let user = new Usuario();
console.log(user.constructor);

// Diferencia entre string primitivo y objeto String:
//
// ""  → es un string primitivo. JavaScript lo trata como un tipo básico.
//       typeof "" === "string"
//
// new String() → crea un objeto envoltorio (wrapper object).
//       No es un string primitivo, sino un objeto que contiene un string.
//       typeof new String() === "object"
//
// En general, se recomienda usar strings primitivos ("texto")
// y evitar new String(), porque puede causar comportamientos inesperados.


// En este ejemplo se muestran dos conceptos importantes:
//
// 1. constructor:
//    Cuando creamos un objeto con 'new Usuario()', ese objeto guarda
//    una referencia a su función constructora. Por eso:
//       user.constructor === Usuario
//    Esto permite saber con qué función fue creado un objeto.
//
// 2. String primitivo vs String objeto:
//    const s1 = "1 + 1";         // string primitivo
//    const s2 = new String("1 + 1"); // objeto String
//
//    Los strings primitivos son del tipo "string".
//    Los creados con new String() son objetos (typeof === "object").
//    Por eso tienen métodos adicionales, como .valueOf().
//
// 3. valueOf():
//    s2.valueOf() devuelve el valor primitivo que envuelve el objeto String.
//    En este caso:
//       s2.valueOf() → "1 + 1"
//    valueOf() extrae el "string real" que está dentro del objeto String.
//
// En general se recomienda usar strings primitivos ("texto")
// y evitar new String(), porque puede causar comportamientos inesperados.
