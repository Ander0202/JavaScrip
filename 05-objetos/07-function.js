function Punto (x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
}

let punto = { z: 7 };
// Punto.call(punto, 1, 2); // Argumentos se pasan uno x uno
Punto.apply(punto, [1, 2]); //argumentos se pasa como array
console.log(punto);

//Nunca usar el constructor de function
/* const Point = new Function('x', 'y', 'this.x = x; this.y = y; this.dibujar = function() {console.log('Dibujando...');}');

const p = New Point(1, 2);
console.log(p); */

