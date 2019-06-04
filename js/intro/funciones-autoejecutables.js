//una funcion auto-ejecutable es una funcion que se va a ejecutar sola ,
// no tiene nombre, solo se ejecuta una vez, nos devuelve algo que hace accesible los metodos
var miCalculadora = (function(){

    console.log("hola");

    function suma(n1, n2){
    return n1 + n2;
    }

    function resta(n1, n2){
        return n1 - n2;
    }

    function multiplica(n1, n2){
        return n1 * n2;
    }

    function divide(n1, n2){
        return n1 / n2;
    }

    return {
        suma: suma, 
        resta: resta, 
        multiplica: multiplica, 
        divide: divide, 
    }
})();
   

   function suma(){
       return 1;
   }

   
   
   