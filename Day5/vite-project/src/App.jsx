import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Notfound from './pages/Web/Notfound'
import Weblayout from './layout/Weblayout'
import Userlayout from './layout/Userlayout'
import ShopByCategory from './pages/User/UserHome/UserLanding'
import ToyProduct from './pages/User/UserHome/UserProduct'
import UserHome from './pages/User/UserHome/UserHome'
import Adminlayout from './layout/Adminlayout'
import AdminPanel from './pages/Admin/AdminPanel'

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
        <Routes>
          <Route  element={<Userlayout/>}>
          <Route path='/shopbycategory' element={<ShopByCategory/>}/>
          <Route path='/toyproduct' element={<ToyProduct/>}/>
          <Route path='/userhome' element={<UserHome/>}/>
          </Route>

        </Routes>
        <Routes>
          <Route  element={<Adminlayout/>}>
          <Route path='/adminpanel' element={<AdminPanel/>}/>
          </Route>

        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App