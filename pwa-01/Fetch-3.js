//FIC: declaramos el objeto.
let usuario = {
    nombre: 'Ruiz',
    edad: 25
}

//API POST de usuario.
fetch('https://reqres.in/', {
    method: 'POST',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API POST');
    console.log(error);
});