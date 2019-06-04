const NUM_MAX = 3;

let angel = 'angel';
angel = 'paco' ;
console.log(angel);

//TEMPLATE LITERAL
let nombre = 'Rickon';
let apellido = 'Satrk';
let nombreCompleto = 'Me llamo' + nombre + ' ' + apellido + ' .';
let nombreCompleto2= `Me llamo ${nombre} ${apellido}.`

console.log(nombreCompleto);
console.log(nombreCompleto2);

let suma = `la suma de 2+2 es ${2+2} y es ${(2+2)%2===0 ? 'par' : 'impar'}`;

console.log(suma);

//FUNCIONES FLECHA

//como siempre
[1,2,3,4,5,6,7].map(function(num){
return num*2;
});

//funcion flecha
let b = [1,2,3,4,5,6,7].map((num) => {
    return num*2;
});
    

//console.log(a);
console.log(b);