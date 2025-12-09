let user = {
    id: 1,
    name: 'Anderson', 
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}


//CODIGO VIEJO... USAR FOR OF
let animales = ['Cerdo', 'pollo', 'pez'];
for (let indice in animales)
    console.log(indice, animales[indice])