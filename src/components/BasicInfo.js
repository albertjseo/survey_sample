import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
  // State variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // Navigation function for programmatic routing
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      // Alert if any field is missing
      alert("All fields necessary!");
    } else {
      // Call the addBasicData function provided by the parent component
      addBasicData(name, email, contact);
      // Navigate to the '/thanks' route
      navigate('/thanks');
    }
  }

  return (
      <form onSubmit={submit} className="basic--nextbtn">
        <label htmlFor="">
          <h4 className="basic--h4">Basic Details</h4>
        </label>
        <div className="entry-req">
          <label htmlFor="">
            <b>1.</b> Name:
          </label>
          {/* Input field for name */}
          <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className='basic--entry'
              placeholder='Enter your Name'
              autoComplete='off'
          />
        </div>
        <div className="entry-req">
          <label htmlFor="">
            <b>2.</b> Email:
          </label>
          {/* Input field for email */}
          <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className='basic--entry'
              placeholder='Enter your Email'
              autoComplete='off'
          />
        </div>
        <div className="entry-req">
          <label htmlFor="">
            <b>3.</b> Contact No.:
          </label>
          {/* Input field for contact number */}
          <input
              type="tel"
              name='contact'
              value={contact}
              onChange={(e) => { setContact(e.target.value) }}
              className='basic--entry'
              placeholder='Enter your Contact No.'
              autoComplete='off'
          />
        </div>
        {/* Submit button */}
        <button type='submit' className='btn btn-success mx-3'>Next</button>
      </form>
  )
}