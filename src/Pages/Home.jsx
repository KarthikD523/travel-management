import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'

export default function Home() {
  return (
    <div className='Home'>
    
    <Hero/>,
    <Popular />
    </div>
  )
}
