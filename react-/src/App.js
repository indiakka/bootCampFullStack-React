import React, {useState} from 'react'
import "./App.css";
import Pagina from "./Pagina";

function App ()
{
  const [ mostarPagina, setMostrarPagina ] = useState( true )
  return (
    <>
      <button onClick= {()=>setMostrarPagina(!mostarPagina)}>Mostrar Página</button>
    { mostarPagina && <Pagina titulo='Mascotas' entidad='mascotas' /> }
  </>  
    ) 
}

export default App;
