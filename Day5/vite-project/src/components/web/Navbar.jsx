import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
    const linksData = [
        {
            title:'Home',
            link :'/'
        },
        {
            title:'Login',
            link :'/login'
        },
        {
            title:'Register',
            link :'/register'
        },
    ]
    return (
        <div className='w-screen absolute h-[10vh]  flex flex-row justify-center items-center bg-primary/20 border-b-2 border-primary/10 g-10'>
             <div className='h-full w-1/4 flex flex-row justify-center items-center'>
             Login
             </div>
             <div className='h-full w-1/4 flex flex-row justify-center items-center font-semibold gap-10'>
                <ul className='flex flex-row'>
                    {linksData.map((data, index) => (
                        <li key={index} className='list-none mx-2'>
                            <NavLink to={data.link}>
                                {data.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
              <ModeToggle/>
             </div>

        </div>
    )
}

export default Navbar











































