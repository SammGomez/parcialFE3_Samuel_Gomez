import React from "react"
import { useState } from "react"
import Card from "../Card/Card"

const Form  = () => {


    const [usuario, setUsuario] = useState({
        nombre:"",
        apellido:"",
        edad: "",
        profesion:""
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(usuario.nombre.length > 3 && usuario.profesion.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
        
    }
    
    return(
    <form onSubmit={handleSubmit}>
        <label >Nombre:</label>
        <input type="text" onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}/>
        <label >Apellido:</label>
        <input type="text" onChange={(e) => setUsuario({...usuario, apellido: e.target.value})}/>
        <label >Edad:</label>
        <input type="text" onChange={(e) => setUsuario({...usuario, edad: e.target.value})}/>
        <label >Profesion:</label>
        <input type="text" onChange={(e) => setUsuario({...usuario, profesion: e.target.value})}/>
        <button>Enviar</button>

        {error && <h6>Por favor chequea que la información sea correcta</h6>}

        {show ? <>
            <Card />
        </>
        : null
        }
        
    </form>
    )
}
export default Form