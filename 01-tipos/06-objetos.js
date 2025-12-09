// Los objetos son de referencia (no son primitivos)

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

// Estas 3 variables pueden ir juntas es aqui donde entra los objetos

let personaje = {
    nombre: "Tanjiro", /*--> par llave - valor (llave nombre - valor tanjiro)*/
    anime: "Demon slayer",
    edad: 16,
}; /*--> Objeto literal*/
console.log(personaje);
console.log(personaje.nombre) /* colocando el punto para acceder a una propiedad  */
console.log(personaje['anime'])

// Cambiar propiedades
personaje.edad = 13;
personaje['edad'] = 16;

// Para eliminar una propiedad se utiliza la propiedad delete
delete personaje.anime;
console.log(personaje)