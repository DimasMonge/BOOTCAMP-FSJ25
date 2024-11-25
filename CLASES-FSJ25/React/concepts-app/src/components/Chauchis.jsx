//PROPS -> Propiedades
//Como recibir los props? A traves de si parametros
export const Chauchis = ({nombreUsuario, edad}) =>{
    return(
        <>
            <h2>Bye bye {nombreUsuario} desde el chauchis</h2>
            <h3>Tu edad es: {edad}</h3>
        </>
    )
}