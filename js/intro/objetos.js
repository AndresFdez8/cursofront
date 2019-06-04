/*
var persona = {
    nombre: 'Rayan',
    apellido: 'smith',
    nombreCompelto: function(){
        return this.nombre + ' ' + ' ' + this.apellido;
    }
}

console.log(persona.nombre);

var clave = "apellido";

console.log(persona[clave]);

console.log(persona.nombreCompelto());

var pelicula = {

    titulo: "Los vengadores",

    director: {
        nombre: '...',
        apellido: 'Russo'
    },

    genero: "Accion/Superheroes",

    setYearEstreno: function(year){
        this.yearEstreno = year;
        var self = this;
        function mostrar(){
            console.log(self);
        }
    }

}
*/
/*
var serie ={
    titulo: 'The walking Dead',
    episodios: 180,
    episodiosVistos: 178,
}
*/
/*
//PARA CREAR OBJETOS SERIES 
function Serie(titulo, episodios, episodiosVistos){
    this.titulo = titulo
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
}
var got = new Serie('GOT', '72', '70');
console.log(got);

var chernobyl = new Serie('chernobyl', '6', '4');
console.log(chernobyl);


var cancionBatman = new Array(16).join('what'-1) + 'Batman!!';

console.log(cancionBatman);



var texto= 'hola !';
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.replace(/o/gi, 0));
//separar en un arrray por espacios 
console.log(texto.split(' '));
console.log(texto.s);

//devolver posicion de la exclamacion
console.log(texto.indexOf('!'));

//comprueva si esta incluido en el string
console.log(texto.includes('e'));

*/


var colores = ['amarillo', 'rojo', 'verde'];

colores.push('blanco');
colores.unshift('azul');

console.log(colores);

//con pop obtenemos el ultimo y lo quita del array

var ultimo = colores.pop();

console.log(ultimo);

//concatenar arrays : concat

var arrayTotal = colores.concat([ultimo, " azulon"]);

console.log(arrayTotal);



var hoy = new Date();

console.log(hoy.getFullYear());
console.log(hoy.getDay());



//crear un JSON con el objeto que le paso por aprametro
var angelJSON.stringify({nombre: 'angel'})
var angel = {nombre: 'angel'};


//cambiar de json a objeto javascript
var angelObjeto ( JSON.parse(angelJSON));