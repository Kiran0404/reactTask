// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Body from './compoments/Body'
import Footer from './compoments/Footer'
import Head from './compoments/Head'
import Navbar from './compoments/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Head/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
