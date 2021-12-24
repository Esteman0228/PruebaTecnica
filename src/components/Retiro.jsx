import React from 'react'

export default function Retiro({score}) {
    return (
        <div>
            <h1>Haz suspendido el desafío</h1>
            <h2>Tu puntuación es: {score}</h2>
            <h2>te llevas {score} mil pesos</h2>
        </div>
    )
}
