import React from 'react'
import Item from '../Item/Item'
import mumbai from '../Assets/Mumbai.png'
import './Popular.css'
import popular_locations from '../Assets/popularLocation'

export default function Popular() {
  return (
    <div className='Popular '>
        <h1>Popular Destinations</h1>
        <div className='Popular-item'>
        {
            popular_locations.map((location,i)=>{
                return <Item id={location.id} key={location.id} city={location.city} image={location.image}/>
            })
        }
       
        </div>
      
    </div>
  )
}
