//Enviar a la consola "Hola Mundo".
console.log('¡Hola Mundo!');
//FIC: funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero, fcnResultadoCallBack ){

    var promesa = new Promise(function(resolve, reject){
        
        if (numero >=7 ){
            reject('El número ya es muy alto');
        }
        
        setTimeout(function(){
            resolve( numero + 1);
        }, 800);
    });

    return promesa;
}
//FIC: llamado de la función y promesa
/* fcnSumarUno(5).then( function(nuevoNumero){
    console.log(nuevoNumero);
}); */

//llamado de la función y promesa
//de forma recursiva de manera encadenada.
/* fcnSumarUno(5).then( nuevoNumero=>{
    console.log("Resultado: ", nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado: ",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado: ",nuevoNumero);
}); */

fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado: ", nuevoNumero);
})
.catch(error =>{
    console.log('Error en la Promesa', error);
});