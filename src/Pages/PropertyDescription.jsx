import { Form, useParams } from 'react-router-dom'
import './PropertyDiscription.css'
import ban_img from '../Components/Assets/banglorestay.png'

import React, { useState,useEffect } from 'react'
import { supabase } from '../supabaseClient'
import ContactForm from '../Components/Form/Form'

export default function PropertyDescription() {


    const [inDate,setInDate]=useState();
    const [outDate,setOutDate]=useState();
    const [dateDifference,setDateDifference]=useState()
    const [price,setPrice]=useState(0)
    const [book,setBook]=useState(false)
    
    

    const [property,setProperty]=useState({})

    const {propertyId}=useParams()

    console.log(propertyId)

    useEffect(() => {
        console.log(inDate)
        console.log(outDate)
        console.log(dateDifference);
        setPrice(dateDifference*property.price_per_night)
      
        
      }, [dateDifference]);

    useEffect(() => {
        async function getPropertyDetails() {
          try {
            const { data, error } = await supabase
              .from('property')
              .select('*')
              .eq('property_id', propertyId); 
              
              
    
            if (error) {
              console.log(error)
              throw error;
            }
    
            if (data != null) {
              setProperty(data[0])
              
              
            }
          } catch (error) {
            alert(error.message);
          }
        }
        console.log(property)
        console.log(property.title)
        
        getPropertyDetails();
      
        
    
      }, [propertyId]);

 
      const calculateDateDifference = () => {
        // Check if outDate and inDate are defined and not empty strings
        if (outDate && inDate) {
          const outDateObj = new Date(outDate);
          const inDateObj = new Date(inDate);
      
          // Check if the date objects are valid before getting time
          if (!isNaN(outDateObj.getTime()) && !isNaN(inDateObj.getTime())) {
            let differenceInTime = outDateObj.getTime() - inDateObj.getTime();
            let differenceInDays = differenceInTime / (1000 * 3600 * 24);
      
            setDateDifference(differenceInDays);
           
          } else {
            // Handle invalid dates
            console.error('Invalid date format');
          }
        } else {
          // Handle undefined or empty dates
          console.error('Date inputs are undefined or empty');
        }
      };
   
      

   
  return (
    <div className='property-display'>
       <div className='property-display-left'>
          <div className='property-display-image-list'>
              <img src={property.property_url} alt="" />
              <img src={ban_img} alt="" />
              <img src={ban_img} alt="" />
             
          </div>

         
          
        </div>

        <div className='property-display-right'>

        <div className='property-display-img'>
               <img className="property-display-main-img" src={ban_img} alt=""/>
          </div>

      
          <h1>{property.title}</h1>

           

            <div className='property-display-rightDescription'>
             {property.description}
            </div>    

            <div className='property-display-rightPrice'>
            Rs {property.price_per_night}/night
            </div>  

            <div className='property-display-rightAddress'>
           Address: {property.address}
            </div>  

            

            <div className='property-display-rightRooms'>
           Rooms Availabe: {property.no_bedrooms}
            </div>  

       

            < div className='Date'>
            

            
            <div className='In-Date'>
            <h3>Check-In-Date</h3>
             <input type='date' onChange={e=>{setInDate(e.target.value);console.log(inDate)}} />
            </div>

            <div className='Out-Date'>
            <h3>Check-Out-Date</h3>
             <input type='date'  onChange={e => {
                console.log(outDate)
               setOutDate(e.target.value);
                console.log(dateDifference)
         }} />
         
            </div>
            </div>

            <button className='Book-Button'  onClick={calculateDateDifference}>Confirm Date</button>


            {
             price && (<>
                <h3>Amount: Rs {price}</h3>
                <button className='Book-Button' onClick={()=>setBook(true)}>BOOK NOW</button>
               {book && <div>
                    <ContactForm checkIn={inDate} checkOut={outDate} propertyId={propertyId}/>
                </div>}
                </>
                )
            }   
       



        </div>

    </div>
        
  )
}
