import { useState } from 'react'

import Main from './components/main/Main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>
    </>
  )
}

export default App
