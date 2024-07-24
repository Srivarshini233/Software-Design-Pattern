import { Facebook, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-primary/20 border-t-2 border-primary/10'>
         <div>

         </div>
         <div className='flex flex-row justify-center items-center gap-10'>
            <a href='google.com' target='_blank'>
                <Facebook className='h-6 v-6'/>
            </a>
            <a href='google.com' target='_blank'>
                <Twitter className='h-6 v-6'/>
            </a>
         </div>
    </div>
  )
}

export default Footer