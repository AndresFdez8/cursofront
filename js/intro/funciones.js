/*
//funciones
function muestraMsg(msg){
    
    console.log(msg);
    
}
/*
muestraMsg("un mensaje");
muestraMsg();

function muestraArgs(){
    console.log(arguments);
}

muestraArgs(1,2,3,4);

//funciones recursivas
//son funciones que se llaman a si mismas 

// sumatorio de 5, 5 + 4 + 3 + 2 + 1 
function sumatorio(num){
    if (num === 1){
        return num;
    }else{
        return num + sumatorio(num-1);
    }
}
var sum5 = sumatorio(5);
console.log("sumatorio de 5: " + sum5);

//callbacks
function ejemploCallbacks(){
    console.log(1);
    
    setTimeout(function(){
        console.log(2)
    }, 2000);

    console.log(3);
}


function validar(nombreIntroducido, cb){
    console.log("pidiendo nombres validos");

    console.log("nombres validos recibidos");
    setTimeout(function(){
        if (["angel" , "sandra", "charly"].includes(nombreIntroducido)]){
            cb();
            return true;
        }
    }, 300);

}

var esValido = validar("angel", guardar );

console.log("es valido: " + esValido);

if (esValido){
    guardar();
}

function guardar (){
    console.log("datos guardados");
}

/*
//funcion anonima

function(){
    //aqui se hace algo 
}
*/


var series = ["TWD", "GOT" , "CHERNOBYL"];

series.forEach(function(elem, pos){

    console.log(pos + ": " + elem);


});

//Funciones de arrays

var nums = [1,2,3,4,5];

var numImpares = nums.filter(function(elem){
return (elem % 2 !== 0);
});

console.log(numImpares);

var numImparesX3 = numImpares.map(function(elem){
return elem * 3;
});


console.log(numImparesX3);

var sumaTotalImparesX3 = numImparesX3.reduce(
    function(acc, elem){
        return acc += elem;
}, 0 );

console.log(sumaTotalImparesX3);