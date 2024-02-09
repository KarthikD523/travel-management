import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


export default function Item(props) {
  
  return (
    <div className='Item'>
      <Link to={`/travel-management/SearchLocation/${props.city}`}>
      <img onClick={window.scrollTo(0,0)} src={props.image} alt=""  />
      </Link>
       <p>{props.city}</p>
       
    </div>
  )
}
