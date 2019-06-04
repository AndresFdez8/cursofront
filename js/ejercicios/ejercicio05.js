function esPalindromo(palabra){

    palabra = palabra.replace(/ /gi, "");
    var tam = palabra.length;
    var end = false, par = true;
   
    if(tam % 2 === 0){
        par = false;
    }

    if(par){
        var numVeces = palabra.length / 2 + 1;
        }
    else{
        var numVeces = palabra.length / 2;
    }
    end = hacer(numVeces, palabra);

    if(!end){
        console.log("es palindromo")
    }else{
        console.log("no es palindromo");
    }    

}

function hacer(numVeces, palabra){
    var fin = false;
    var inicio = 0, final = palabra.length - 1;
    while(!fin && inicio < numVeces){
        if(palabra[inicio] !== palabra[final]){
            fin = true;
        }
        inicio++;
        final--;
    }
    return fin;
}
/*
SOLUCION DE ANGEL, MENOS CODIGO MAS EFICIENTE USANDO 
FUNCIONES DE JAVASCRIPT
function esPalindromo(texto){

    var textoSinEspacios = texto.replace(/ /g,"");

    var arrayLetras = textoSinEspacios.split('');
    var arrayAlReves = arrayLetras.reverse();
    var textAlreverse = arrayAlReves.join('');

    return textoSinEspacios === textoAlReves;

}

esPalindromo('hola aloh');

*/