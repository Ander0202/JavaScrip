function crearUser (name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
        console.log('recuperando clave...')
        },
    };
}

let user1 =crearUser ('Anderson', 'anderson@moreno.com');
let user2 =crearUser ('Luis', 'luis@moreno.com');

console.log(user1,user2)

// USAR camelCase