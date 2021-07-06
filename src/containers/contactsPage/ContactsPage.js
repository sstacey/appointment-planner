import React, { useState, useEffect } from "react";

import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ( { contacts, addContact }) => {

 const [name, setName] = useState('') 
 const [phone, setPhone] = useState('') 
 const [email, setEmail] = useState('')

  // Check for dups when name changes
  //Only add new contact on submission if name does not exisits
  useEffect(() => {
    const dup = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
    const submitButton = document.getElementById('submit')
    const nameError = document.getElementById('name-error')
    if (dup) {
      console.log('Dup found!')
      submitButton.disabled = true
      nameError.hidden = false
    } else {
      submitButton.disabled = false
      nameError.hidden = true
    }
  }, [name])


  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({name, phone, email})
    setName('')
    setPhone('')
    setEmail('')
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          arr={contacts} />
      </section>
    </div>
  );
};
