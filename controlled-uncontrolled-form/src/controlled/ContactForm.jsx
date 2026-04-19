import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hobbies: [],
    address: '',
    message: ''
  });

  return (
    <div id="contactFormWrapper">
      <form id="contactForm">
        <div className="row">
          <input type="text" placeholder="First Name" name="firstName" />
          <input type="text" placeholder="Last Name" name="lastName" />
        </div>

        <div className="row">
          <input type="email" placeholder="Email" name="email" />
          <input type="tel" placeholder="Phone" name="phone" />
        </div>

        <div className="row">
          <label>
            <input type="checkbox" name="hobbies" value="sports" />
            Sports
          </label>
          <label>
            <input type="checkbox" name="hobbies" value="music" />
            Music
          </label>
          <label>
            <input type="checkbox" name="hobbies" value="travel" />
            Travel
          </label>
        </div>

        <div className="row">
          <input type="text" placeholder="Address" name="address" />
        </div>

        <div className="row">
          <textarea placeholder="Message" name="message"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm