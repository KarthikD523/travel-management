import React from 'react'
import Hero_img from '../Assets/heroimg.png'
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='Hero'>
       <img src={Hero_img} alt=""/>
       <div className='text-over'>Book Your Perfect Stay, 
        Where Every Journey Finds
         its Home!</div>
       <Link to='/SearchLocation'>  <div className='Button'>
         <button  >EXPLORE</button> 
       </div>
       </Link>
    </div>
  )
}
