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
       <Link to='/travel-management/SearchLocation'>  <div className='Button'>
         <button className='Hero-Button' >EXPLORE</button> 
       </div>
       </Link>
    </div>
  )
}
