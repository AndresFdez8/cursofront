

var numeros = [1,12,13,15,17,19,20,39,56];

var ejercicio = numeros.map(function(num){
return num % 2 === 0 ? "par" : num;
});

console.log(ejercicio);
