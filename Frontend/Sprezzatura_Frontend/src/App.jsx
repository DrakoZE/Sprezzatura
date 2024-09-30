import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function contador() {
    console.log(count);
    let numRandom = Math.floor(Math.random() * 100)
    setCount(numRandom)
    
  }

  return (
    <>
      <h1>Presiona el boton y generaras un numero aleatorio</h1>
      <button onClick={() => contador()}>{count === 0 ? "Presiona el boton" : count}</button>
    </>
  )
}

export default App
