import React from 'react'
import ban_img from '../Assets/banglorestay.png'
import './PropertyCard.css'

export default function PropertyCard(props) {
  return (
    <div className='Property-Card'>
   
      <img onClick={window.scrollTo(0,0)} src={props.image} alt=""  />
      
       <p>{props.title}</p>
       
    </div>
  )
}
