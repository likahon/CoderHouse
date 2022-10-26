Con "rafc" se puede crear de una la estructura vacia de React.

EJEMPLO: 
import React from 'react'

export const Video = () => {
  return (
    <div>Video</div>
  )
}



Ciclos de vida

Montaje en DOM - componentDidMount: Hacer que el componente se monte en el DOM y se dibuje en pantalla.
Cuando cargas la aplicacion, el componente se monta en el DOM y se muestra en la pantalla.

Actualización - componentDidUpdate: mientras que el ComponentDidMount se ejecuta después del primer render, el ComponentDidUpdate se ejecuta justo después de que el estado cambie y se provoque un nuevo render.

Desmontaje del DOM - :


Cuando el archivo App.js no contiene etiquetas, pasa a ser COMPONENTE CONTENEDOR (CONTAINER)

El Componente Container tiene como única función, llamar a sus hijos

Ejemplo de hijos:
<Header/>


  const[rate, setRate] = useState(0); //useState es una funcion que tiene 1 solo argumento, que es el 0, podemos ponerle cualquier cosa, ejemplo, booleanos. A esto se lo llama HOOK
  useState devuelve siempre un array con 2 posiciones, en este caso el estado (rate) y la funcion que nos sirve para modificar el estado (setRate)


los estados que se coloquen dentro del array de los componentDidMount o componentDidUpdate se llaman dependencias. Se pueden insertar mas de 1 dependencia.
