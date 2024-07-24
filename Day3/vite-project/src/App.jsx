import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Notfound from './pages/Web/Notfound'
import Weblayout from './layout/Weblayout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<Weblayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Notfound' element={<Notfound/>}/>
          </Route>

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App