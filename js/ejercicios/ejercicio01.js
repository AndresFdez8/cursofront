var turnos = 1;
var jugar = true;

var numAleatorio = Math.floor(Math.random()*51);
var num = prompt("Introduce un numero: ");

console.log(numAleatorio);

while(jugar){

    if(numAleatorio === Number(num)){
        alert("El numero introducido es correcto");
        alert("Ha jugado " + turnos + " turnos");
         jugar = confirm("¿querria volver a jugar");
         if(jugar){
             turno = 1;
             numAleatorio = Math.floor(Math.random()*51);
             console.log(numAleatorio);
             num = prompt("Introduce un numero: ");
         }
    } else{
        if ( Number(num) >= numAleatorio){
            alert("el numero introducido es mayor");
        }else{
            alert("el numero introducido es menor");
        }
        num = prompt("Introduce un numero: ");
        turnos++;
        
    }
}
