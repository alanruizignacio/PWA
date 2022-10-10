console.log('Hola Mundo');

//function fcnSumarUno(numero){
    //return numero + 1;
//}
//let Resultado = fcnSumarUno(5);
//console.log("Resultado: ", Resultado);

function fcnSumarUno(numero,fcnResultadoCallBack){
    setTimeout(function(){
        fcnResultadoCallBack( numero + 1);
    }, 800);
}

fcnSumarUno(5,function(nuevoValor1){
 //console.log("Resultado", nuevoValor1);
 fcnSumarUno(nuevoValor1,function(nuevoValor2){
    //console.log("Resultado", nuevoValor2);
    fcnSumarUno(nuevoValor2,function(nuevoValor3){
        console.log("Resultado", nuevoValor3);
    });
 });
});