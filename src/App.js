import React from 'react' 
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path = './pages/' element={<About/>}/>
<Route path = './pages/' element={<Contact/>}/>
<Route path = './pages/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
        
  )
}

export default App;