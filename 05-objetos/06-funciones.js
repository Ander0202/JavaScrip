 function Usuario(nombre) {
    this.nombre = nombre
 }
// las funciones son objetos y son de 1ra clase}
// tienen propiedades como los objetos
 console.log(Usuario.name);
 console.log(Usuario.length);


 // Se pueden asignar a otras variables y otras constantes
 const U = Usuario
 let user = new U('Anderson')

 console.log(user);

 // la podemos Pasar como argumentos a otras funciones
 // definimos una funcion que recibe otra funcion como su primer parametro
 function of(Fn, arg) {
    return new Fn(arg);
 }
//luego se llama abajo llamando la funcion de usuario y pasando ANDER
 let user1 = of(Usuario, 'Ander');
console.log(user1);


// Las funciones pueden ser retornadas en JS
function returned() {
    return function() {
        console.log('Hello worl');
    }
}

//para llamar esta funcion toca llamar a "returned" PARA ESTE CASO.
let saludo = returned();
saludo();