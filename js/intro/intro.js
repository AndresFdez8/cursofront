/*
console.log("hola mundoooo");

var texto = "hola mundo que tal";

console.log(typeof (texto));

texto = 3;

console.log(typeof (texto));

var nombre = "Me llamo \" Andres\" ";

var texto2 = "";

console.log(nombre);

if(nombre){
    console.log("verdadero");
}


if(texto2){
    console.log("verdadero");
}

//Arrays 

var numsLiteral = [1,2,3,4,5];
var numsConstructor = new Array(6,7,8,9);

//con esto creamos array de 3 posiciones 
var ar3Posiciones = new Array(3);

ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12);
ar3Posiciones.push(13);
ar3Posiciones.push(14);


console.log(ar3Posiciones);

//esto si 
nombre11 = "angel";
console.log(nombre11[2]);

//esto no
var num11 = 2322;
console.log(num11[2]);

//operador ternario

// es lo mismo esto que lo de abajo
var txtNum = 3 % 2 === 0 ?  "es par" : "es impar";
console.log(txtNum);

var txtNum2 = "";
if ( 3 % 2 === 0){
    txtNum2 = "es par";
} else {
    txtNum2 = "es impar"
}
console.log(txtNum2);


//consola
console.log("mensaje de info");
console.warn("mensaje de peligro");
console.error("mensaje de error");

// si lo lanzamos en el navegador cada uno muestra una cosa distinta

//Popup JS
//HAY 3 TIPOS : 


alert("mostrar mensaje");

//esto nos meustra una alerta para indicar SI o NO
//devuelve true si es SI y false si es NO
var esVerdad = confirm ("es verdad lo que dicen??");


// Puedes recoger informacion en un string, si cancelas devuelve null
var niNombre = prompt("Como te llamas?")

*/

/*
var fin = false;
while (!fin){
    var nombre = prompt("Buenos dias, ¿Cual es su nombre");
    var edad = prompt ("¿Cuantos años tiene?");

     if(nombre != null && edad != null){
        alert("Su nombre es " + nombre );
        alert("Su edad son " + edad + " años.");
        fin = true;
     }else{
        alert("introduzca los datos correctamente");
     }
     
}
*/


/*
//switch
var nombre = "andres";
switch(nombre){
case 'paco':
console.log("su nombre es paco");
break;

default:
    console.log("ni idea de quien eres ");
}

*/
//bucles 

//for (el normal de toda la vida )
var nombres =  ["robb" , "arya", "sansa" , "jon", "daanerys"];

for(var i = 0; i < nombres.length ; i++){
    console.log(nombres[i]);
}

console.log ( "");


//for in 
for(var i in nombres){
    console.log('FORIN: '  + nombres[i]);
}

console.log ( "");


//for of 
for (var nombre of nombres){
    console.log("FOROF:" + nombre);
}

