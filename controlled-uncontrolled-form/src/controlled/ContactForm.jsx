import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hobbies: [],
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value] // add
          : prev.hobbies.filter((h) => h !== value), // remove
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(!formData.firstName){
      alert("First name is required");
      return;
    }
  };

  return (
    <div id="contactFormWrapper">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              onChange={handleChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="music"
              onChange={handleChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="travel"
              onChange={handleChange}
            />
            Travel
          </label>
        </div>

        <div className="row">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
