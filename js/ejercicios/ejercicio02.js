var num1 = 0,  num2 = 0;
var sePaso = false, fin = false

var jugar = confirm("¿Quieres jugar?");

while(jugar){
    var quieroNumero = confirm("¿Quieres un numero?");
    if(quieroNumero){
        num1 = sumarAleatorio(num1);
        console.log(num1);
        if(Number(num1)>20){
            sePaso = true;
            alert("Has perdido");
            jugar = false;
            fin = true;
        }
    }else{
        jugar = false;
    }
}

if(!fin){
    while(!sePaso){
        num2 =   sumarAleatorio(num2);
        console.log(num2);
        if(Number(num2)>17){
            sePaso = true;
        }
    }
    
    if(Number(num2)> 20){
        alert("has ganado")
    }else{
        quienGana(num1, num2);
    }
    
}


function quienGana(num1,num2){
    if(Number(num1)>Number(num2)){
        alert("has ganado");
    } else if(Number(num1)<Number(num2)){
            alert("Has perdido");
        }else{
            alert("Empate");
        }
}

function sumarAleatorio(num){
    return num += Math.floor(Math.random()*9) +1;
}