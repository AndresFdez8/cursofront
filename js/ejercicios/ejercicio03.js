

function Serie(titulo, episodios, episodiosVistos){
    this.titulo = titulo
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    var self = this;
 
    if(episodios - episodiosVistos === 0){
            this.finalizada = true;
    } else {
            this.finalizada = false;
    }

    
}

var got = new Serie('GOT', '72', '70');
var twd = new Serie('TWD', '200', '200');
var bb = new Serie('BreakinBad', '72', '72');
var pb = new Serie('peaky blinders', '200', '180');

var series = [got, twd, bb, pb];


/*

 function calcularNoFin (series){
    var seriesfinalizadas = new Array();
    for ( var s of series) {
        if(!s.finalizada){
            seriesfinalizadas.push(s)
        }
    }
    return seriesfinalizadas;
}
*/


 var seriesNofinalizadas = series.filter(function(s){
    return (!s.finalizada);
});


console.log("Series no finalizdas: ")
for(s of seriesNofinalizadas){
    console.log(s.titulo);
}

