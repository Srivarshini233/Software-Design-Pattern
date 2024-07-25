import React from 'react'
import { AnimatedListDemo } from './AnimatedListDemo'
import { BoxRevealDemo } from './BoxReveal'
const Home = () => {
  return (<>
    <div className='w-full h-screen flex justify-center items-center text-xl pt-20 bg-blue-100'>

      <div className='h-full w-full flex justify-center items-center text-xl  pt-0px'>
      <BoxRevealDemo/>
      </div>
      <div className='h-full w-full flex items-center justify-end text-xl pt-10 pr-4'>
      <AnimatedListDemo/>
      </div>
      </div>
      <div>
        <div className='h-[80vh] w-screen flex gap-10 items-center'>
           
          <div className='h-full w-full flex justify-between items-center p-8  bg-blue-100'>
            <div>
            <h1 className='text-3xl font-bold mb-4'>Heyy!! Toys Unleash Creativity. Explore, Imagine, Enjoy!</h1>
            <p>These stores typically offer a wide range of products, including educational toys, dolls, action figures, board games, puzzles, and outdoor play equipment. Toy stores often aim to create a fun and engaging shopping experience, catering to both children and parents seeking entertainment, educational value, and developmental growth through play.</p>
            </div>
            <img className='h-80 w-70 object-cover' src='https://images.hdqwalls.com/download/toy-story-photography-v4-1920x1080.jpg' alt='Landing Page' />
        </div>
        </div>
      </div>
      
</>
  )
}

export default Home