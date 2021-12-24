import React from 'react'

export default function CorrectoIncorrecto({fase, score, setPregunta, correcto, setRetiro}) {
    return (
        <>
            {correcto 
            ?(
                <div>
                    <h1>¡Correcto! Fase {fase} superado</h1>
                    <h2>Tu puntuación es: {score}</h2>
                    <p>¿Deseas continuar?</p>
                    <div className='botones'>
                        <button onClick={()=>setPregunta(true)}>¡CLARO!</button>
                        <button onClick={()=>setRetiro(true)}>No me atrevo</button>
                    </div>
                </div>
            ) 
            :(
                <div className='incorrecto'>
                    <h1>¡Incorrecto!</h1>
                    <h2>Tu puntuación es: 0</h2>
                    <p>Mejor suerte a la proxima</p>
                </div>
            )}
        </>
    )
}
