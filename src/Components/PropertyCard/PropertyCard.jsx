import React from 'react'
import ban_img from '../Assets/banglorestay.png'
import './PropertyCard.css'
import { Link } from 'react-router-dom'

export default function PropertyCard(props) {
  return (
    <div className='Property-Card'>
    <Link to={`/travel-management/SearchLocation/${props.city}/${props.id}`}>
      <img onClick={window.scrollTo(0,0)} src={props.image} alt=""  />
      </Link>
       <p>{props.title}</p>
       
    </div>
  )
}
