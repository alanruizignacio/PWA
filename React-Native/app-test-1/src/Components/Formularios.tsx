import { useState } from "react"
import { useForm } from "./Hooks/useForms";
export const Formularios = () => {
    const {formulario, email, password, onChange} = useForm(Formularios);
    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                //value={formulario.email}
                value={email}
                onChange={({target})=> onChange(target.value, 'email')}
            ></input>
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                //value={formulario.password}
                value={password}
                onChange={({target})=> onChange(target.value, 'password')}
            > 
            </input>
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}