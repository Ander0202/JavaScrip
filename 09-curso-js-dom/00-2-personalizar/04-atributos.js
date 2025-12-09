const enlace = document.getElementsByTagName('a');

console.log(enlace[0].getAttribute('href')); //Verificar el valor de un atributo. Selecionar segun su indice [0] y ya se puede trabar como objeto
console.log(enlace[0].removeAttribute('href')); //eliminar atributo
console.log(enlace[0].setAttribute('href', 'https://www.papajohns.com.co/')); // Actualizar atributo