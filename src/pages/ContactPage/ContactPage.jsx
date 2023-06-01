import React from 'react'
import './ContactPage.css'

function ContactPage() {
  return (
    
      <div className='contactpage-container'>
        <div className='contact-elements'>
          <h3>Contact Us</h3>
          <input placeholder='First Name'></input>
          <input placeholder='Last Name'></input>
          <textarea rows="6" cols="19" placeholder='Write your messsage here'></textarea>
          <button type='submit'>Submit</button>
        </div>
      </div>
    
  )
}

export default ContactPage