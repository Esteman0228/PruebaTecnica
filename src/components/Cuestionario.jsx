import React,{useState, useEffect} from 'react'
import CorrectoIncorrecto from './CorrectoIncorrecto';
import Retiro from './Retiro';
import Lista from '../preguntas.json'

export default function Cuestionario({nombre}) {

    const [fase, setFase] = useState(0);
    const [aleatoreo, setAleatoreo] = useState(0);
    const [seleccion, setSeleccion] = useState(null);
    const [score, setScore] = useState(0);
    const [pregunta, setPregunta] = useState(true);
    const [correcto, setCorrecto] = useState(null)
    const [retiro, setRetiro] = useState()

    useEffect(()=>{
        setAleatoreo(Math.floor(Math.random()*4))
    },[fase])

    const onSubmit = (e) =>{
        e.preventDefault()
        if(seleccion){
            setFase(fase+1)
            setSeleccion(null)
            setScore(score+100)
            setPregunta(false)
            setCorrecto(true)
        }else{
            setPregunta(false)
            setCorrecto(false)
            setScore(0)
        }
    }

    return (
        <>
            {retiro 
            ? (<Retiro
                score={score}
            />)
            :( pregunta 
                ?(
                    fase <= 4 
                        ? (
                            <div>
                                <h2>{Lista.Preguntas[fase][aleatoreo].pregunta}</h2>
                                <form onSubmit={onSubmit}>
                                    {Lista.Preguntas[fase][aleatoreo].opciones.map(item=>(
                                        <div key={item.id} onChange={()=>setSeleccion(item.flag)}>
                                            <input type='radio' name='seleccion' id={item.opcion} value={null}/>
                                            <label htmlFor={item.opcion}>{item.opcion}</label>
                                        </div>
                                    ))}
                                    <input type='submit' value='Avanzar'/>
                                </form>
                            </div>
                        ) : (
                            <div>
                                <h1>Felicidades {nombre}! Haz superado el desafío</h1>
                                <h2>Tu puntuación es: {score}</h2>
                                <h2>te llevas el premio mayor de {score} mil pesos</h2>
                            </div>
                        )
                )
    
                :(<CorrectoIncorrecto 
                    fase={fase}
                    score={score}
                    setPregunta={setPregunta}
                    correcto={correcto}
                    setRetiro={setRetiro}
                />)
            )
            }
        </>
    )
}