// import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* Aquí va tu contenido principal */}
      <Footer />
    </div>
  )
}

export default App