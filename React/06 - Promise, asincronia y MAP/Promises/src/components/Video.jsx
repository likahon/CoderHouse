import { useEffect } from 'react';
import { useState } from 'react'

const Video = (props) =>{

    // let rate = 0; // state del componente!!!
    const [rate, setRate] = useState(0); //HOOK
    const [logued, setLogued] = useState(false) //HOOK

    // SUMA 1 RATE
    const rateVideo = () =>{
        // rate++; ESTO NO SE PUEDE HACER EN REACT
        setRate(rate + 1); //Para modificar el estado, en este caso debemos usar la funcion setRate
    }

    // componentDidUpdate
    useEffect(() => {
      console.log("El componente se ha actualizado")
    }, [rate, logued]) //Para que funcione como un componentDidUpdate, en el array debemos ponerle el estado, en este caso, rate, logued, etc. En este caso tiene 2 dependencias

 // RESTA 1 RATE
    const rateVideoNeg = () =>{
      if (rate > 0) {
        setRate(rate - 1); //Para modificar el estado, en este caso debemos usar la funcion setRate
      }
        // rate++; ESTO NO SE PUEDE HACER EN REACT
    }
 

    return(
        <div className="video-container">
      <div className="video-image">
        <img src={props.thumbnails} alt="Same alt value" />
      </div>
      <div className="video-info">
        <button onClick={props.deleteVideo}>Delete Video</button>
        <h3>{props.title}</h3>
        <span>This video has {rate} stars</span>
        <button onClick={rateVideo}>Sumar estrella</button>
        <button onClick={rateVideoNeg}>Restar estrella</button>
        <p>{props.dateAdded}</p>
        <h4>Channel's Title: {props.channel}</h4>
        <p>{props.description}</p>
      </div>
    </div>
    )
}

export default Video

