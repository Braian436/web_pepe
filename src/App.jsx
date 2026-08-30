import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/main/main.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main/>
      <Footer />
    </div>
  )
}

export default App