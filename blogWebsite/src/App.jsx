import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {


  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path= '/' element = {<Navbar/>}>
      <Route path= '/home' element = {<Home/>}></Route>
      <Route path= '/about' element = {<About/>}></Route>
      <Route path= '/blog' element = {<Blog/>}></Route>
      <Route path= '/contact' element = {<Contact/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
