import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

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