import './App.css'
import { Saludo } from './components/Saludo'
// import {Saludo as Saludito} from './components/Saludo'


function App() {
//Comentarios de una sola linea  
/* 
Ingresar codigo JS en el return del html
{ }
*/
  return (
    <div>

      {/*SOY UN COMENTARIO EN JS DENTRO DEL HTML RETORNADO*/}
      <h1>Hola desde el App</h1>
      <h2>FSJ25</h2>

      {/*LLamada a un componente*/}
      <Saludo/>
      {/* <Saludito/> */}
      
    </div>
  )
}

export default App