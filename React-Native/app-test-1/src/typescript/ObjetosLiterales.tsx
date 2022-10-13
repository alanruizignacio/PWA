export const ObjetosLiterales = () =>{
    const persona = {
        nombreCompleto: 'Martha',
        edad: 30,
        direccion: {
            pais: 'México',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'Conocido',
            numero: 533
        }
    }

     //Creación de Interface Persona
     interface Persona {
        nombreCompleto: string,
        edad: number,
        direccion: {
            pais: string,
            estado: string,
            ciudad: string,
            calle: string,
            numero: number
        }
    }

     //Creación de interface Direccion
     interface Direccion {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }
     //const frank = new Persona(); //error

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </div>
    )
}