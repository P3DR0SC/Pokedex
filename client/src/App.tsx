import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
//import { PokemonController } from '../../server/controller/pokemonController.ts'

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])

  const fetchApi = async () =>{
    const response = await axios.get("http://localhost:3000/api")
    setArray(response.data.pokemon);
    console.log(response.data.pokemon);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {array.map((pokemon, index) => (
          <div key={index}>
            <p>{pokemon}</p>
            
          </div>

        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
