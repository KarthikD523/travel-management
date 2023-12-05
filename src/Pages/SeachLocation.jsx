import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient';
import Item from '../Components/Item/Item';
import './SearchLocation.css'

export default function SeachLocation() {
  const [filteredData,setFilteredData]=useState([])

  const [locations,setLocations]=useState([])

  useEffect(() => {
    async function getLocations() {
      try {
        const { data, error } = await supabase
          .from('Location')
          .select('*')
          

        if (error) {
          console.log(error)
          throw error;
        }

        if (data != null) {
          
          
          setLocations(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    
    getLocations();
  }, []);

  const handleFilter=(e)=>{
  const searchWord=e.target.value;
  const newFilter=locations.filter((location)=>{
      return location.city.toLowerCase().includes(searchWord.toLowerCase())
  })
  if(searchWord === ""){
    setFilteredData([])
  }
  else{
  setFilteredData(newFilter)
  }
  }


console.log(locations)
  return (
    <div className='Search-Location'>
     <div className='search-input'>
      <input type="text" placeholder='Enter Destination' onChange={handleFilter}/>
       { filteredData.length!=0 && (
      <div className='search-result'>
       
        {
          filteredData.map((location,i)=>{
            return <Item key={location.id} city={location.city} image={location.location_url}/>
          })
        }
      
      </div> )
}
     </div>
    </div>
  )
}
