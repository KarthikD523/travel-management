import React, { useState } from 'react';
import './Form.css'
import { supabase } from '../../supabaseClient';

function ContactForm(props) {
    let newNoOfRooms;
   let booking=1;
    const { propertyId, checkIn, checkOut } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Access the form data using separate state variables
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // You can perform other actions here, such as sending data to a server
    const { data, error } = await supabase
    .from('booking')
    .insert([
      {
       
        property_id:propertyId,
        check_in_date:checkIn,
        check_out_date:checkOut,
        name:name,
        email:email,
        phone_no:phone,
       }
    ]);

  if (error) {
    console.error('Error inserting data:', error.message);
  } else {
    console.log('Data inserted successfully:', data);
  }

  const { data: propertyData, error: propertyError } = await supabase
  .from('property')
  .select('no_bedrooms')
  .eq('property_id', props.propertyId);

if (propertyError) {
  console.error('Error fetching property data:', propertyError.message);
  return;
}

const currentNoOfRooms = propertyData[0].no_bedrooms;

// Calculate the new no_of_rooms value by decrementing it
if(currentNoOfRooms>0){
 newNoOfRooms = currentNoOfRooms - 1;
}

// Update the no_of_rooms field in the property table
const { data: updateData, error: updateError } = await supabase
  .from('property')
  .update({ no_bedrooms: newNoOfRooms })
  .eq('property_id', props.propertyId);

if (updateError) {
  console.error('Error updating no_of_rooms:', updateError.message);
} else {
  console.log('No_of_rooms updated successfully:', updateData);
}


alert('Booked Successfully')

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
        />
      </label>

      <button className='Button-Form' type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
