//funcion normal que regresa una promesa
//pero el resultado se obtiene mas lento.
function fcnSumarLento( numero ){
    /* var promesa = new Promise(function(resolve, reject){
    });
    return promesa; */
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}
//esta es la manera mas optimizada de definir
//una funcion pero de tipo arrow (flecha) que
//tambien regresa una promesa pero el resultado se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve( numero + 1 );
            reject('Error en la promesa de la función Sumar Rápido');
            }, 1000);
    });
}


Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuesta: ', respuesta);
    })
    .catch(error=>{
        console.log("Error en la respuesta de la promesa: ", error);
    });