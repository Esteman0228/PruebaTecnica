import React,{useState} from 'react';
import './App.css';
import Cuestionario from './components/Cuestionario';

function App() {
  const [nombre, setNombre] = useState('');
  const [intro, setIntro] = useState(true);

  const onChange = e =>{
    setNombre(e.target.value)
  }

  const onSubmit = () =>{
    setIntro(false)
  }
  return (
    <>
      {intro 
      ?(<form onSubmit={onSubmit}>
        <h1>Bienvenido a la trivia de programación</h1>
        <h2>¿Como es tu nombre, concursante?</h2>
        <input type='text' name='nombre' onChange={onChange}/>
        <input type='submit' value='iniciar'/>
      </form>) 

      :(<Cuestionario
        nombre={nombre}
      />)}
    </>
  );
}

export default App;
