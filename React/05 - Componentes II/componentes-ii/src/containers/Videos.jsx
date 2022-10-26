import Video from '../components/Video'
import { useEffect } from "react";

const Videos = () =>{

  // componentDidMount
  useEffect(() => {
    // consulta a la API => array con los datos de los videos
    // fetch
    console.log("El componente se Monto en el DOM")
  }, []); // useEffect es un HOOK que tiene 2 argumentos, el primero es un callback y el segundo es un array. En la funcion es donde vamos a hacer la consulta a la base de datos y la misma se va a ejecutar cuando el componente se monte en el DOM para que aparezca en la pantalla (ejemplo, el console.log). useEffect de montaje tiene array vacio (array de dependencias, en este caso no tiene dependencias)

    return(

        <>
        <Video
        title="Rod Stewart - Young Turks (Official Video)"
        dateAdded="2009-10-29T21:26:05Z"
        channel="Rod Stewart"
        thumbnails="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg"
        description="Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..." />
      <Video
        title="Rod Stewart - Baby Jane (Official Video)"
        dateAdded="2014-03-01T01:35:21Z"
        channel="Rod Stewart"
        thumbnails="https://i.ytimg.com/vi/dxl2r6GuL2w/mqdefault.jpg"
        description="Official music video for Rod Stewart – “Baby Jane” from 'Body Wishes' (1983) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr Watch all ..." />
      <Video
        title="Bizcocho marmolado de naranja. SUPERESPONJOSO"
        dateAdded="2019-09-25T18:16:56Z"
        channel="Anna recetasfaciles"
        thumbnails="https://i.ytimg.com/vi/3GwA45Bcvrs/mqdefault.jpg"
        description="Compra mi libro de recetas COCINA PARA TRIUNFAR en este link https://amzn.to/2UPUhNZ Mi sartén Tefal Aroma 24 cm https://amzn.to/2WSFjLf Batidora de ..." />
      <Video
        title="Jarabe De palo - Ying Yang"
        dateAdded="2008-12-04T14:37:33Z"
        channel="Warner Music Spain"
        thumbnails="https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg"
        description="" />
      <Video
        title="La Niña: ¿Podrá Latinoamérica plantarle cara?"
        dateAdded="2021-10-23T00:15:00Z"
        channel="DW Español"
        thumbnails="https://i.ytimg.com/vi/AsiUBtAQ4wU/mqdefault.jpg"
        description="Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo." />
        </>

    );
};

export default Videos;