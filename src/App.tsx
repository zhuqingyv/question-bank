import React, { useState } from 'react'
import './index.css'

function App(): React.ReactElement {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app-container">
      <h1>Question Bank Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

