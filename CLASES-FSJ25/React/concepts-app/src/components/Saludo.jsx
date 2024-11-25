
//Declaracion de un componente
//Siempre en mayuscula la primera letra el nombre del componente
//este export lo va a exportar como modulo (como un pedazo de codigo) y en la import lleva otra sintaxis, las llaves y se le puede

import { useState } from "react";
import { Chauchis } from "./Chauchis";

//poner un alias
export const Saludo = () => {
    //let nombre = "Dimas";

    //Primer HOOK --> useState
    //HOOK --> Es una funcion prehecha para realizar x accion
    //useState(VALOR INICIAl)
    const [nombre, cambiarNombre] = useState("Dimas");

    return (
        <>
            {/*Fragment*/}
            <h3>Yo en realidad estoy en el componente Saludo jejox</h3>
            <h2>Hola {nombre}, como estas?</h2>
            <button onClick={() =>{cambiarNombre("Eduardo") }}>MAGIA</button>
            <img src=""/>
            <Chauchis nombreUsuario = {nombre} edad ="75"/>
        </>
    )
} 

//export default Saludo