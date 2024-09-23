import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <button target="_blank" onClick={() => setCount((count) => count + 10000)}>
          <img src={reactLogo} className="logo react,card" alt="React logo" />
          <p> {count}</p>
          <h1>its my coin</h1>
        </button>
      </div>

    </>
  )
}

export default App
