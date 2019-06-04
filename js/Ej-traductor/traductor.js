//conseguir que si yo llamo a 


//Traductor.traduce("hola, en") // hello 
//Traductor.traduce("hola,it") // Boungiorno 
//Traductor.traduce("adios, en") // bye

en = {
    'hola': 'hello',
    'adios': 'bye'
}

it = {
    'hola': 'ciao',
    'adios': 'addio',
    'buenos dias' : "buongiono"
}

var traductor = (function(){

    function traduce(idioma, palabra){

        if(idioma === 'en'){
            return en[palabra];
        }


        if(idioma === 'it'){
            return it[palabra];
        }
}

return {
    traduce : traduce
}
})();