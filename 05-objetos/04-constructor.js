// {id: 1, recuperarClave: function(){} }
function Usuario () {
    this.id = 1;
    this.recuperarClave = function () { // Metodos es una funcion que fue asignada a una propiedad de un objeto
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario();

console.log(usuario);

// USAR UpperCamelCase

/* 

{} --> crea objeto vacio
Prototipo 
this = {} --> se le asigna a this el objeto que se creo vacio
retorne this --> si no retorna se retorna automaticamente a this

*/