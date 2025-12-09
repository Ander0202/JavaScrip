const user = {id: 1};

user.name = 'Ander';
user.guardar = function () {
    console.log('Guardando', user.name);
}
user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

const user1 = Object.freeze({ id: 1 }); // la propiedad de freeze no permite modificar o agregar propiedades
user1.name = 'Anderson';
user1.id = 2;
console.log (user1);

const user2 = Object.seal({ id: 1 }); // la propiedad de seal permite modificar pero no agregar o quitar propiedades
user2.name = 'Luis';
user2.id = 2;
console.log (user2);