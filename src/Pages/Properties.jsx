import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import PropertyCard from '../Components/PropertyCard/PropertyCard';
import './Properties.css'



export default function Properties() {
  
  const { locationName } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getProperties() {
      try {
        const { data, error } = await supabase
          .from('property')
          .select('*')
          .eq('city', locationName); 
          
           // Assuming 'city' in the table matches the 'locationName'

        if (error) {
          console.log(error)
          throw error;
        }

        if (data != null) {
          
          
          setProperties(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    
    getProperties();

    

  }, [locationName]); // Add locationName as a dependency

  

  return (
    <div className='Properties'>
    {properties.map((property, index) => {
      
      return (
        <PropertyCard
          key={index}
          id={property.property_id}
          city={property.city}
          title={property.title}
          image={property.property_url}
        />
      );
    })}
  </div>
  );
}