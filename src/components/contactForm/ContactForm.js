import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameUpdate = ({ target }) => {
    setName(() => target.value)
  }

  const handlePhoneUpdate = ({ target }) => {
    setPhone(() => target.value)
  }

  const handleEmailUpdate = ({ target }) => {
    setEmail(() => target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <label for="name" id="name-error">Duplicate Name Found</label>
        <input 
          onChange={handleNameUpdate} 
          required value={name} 
          placeholder="Enter a name"
          type="text"
          id="name" />
      </label>
      <label>
        Phone:
        <input 
          onChange={handlePhoneUpdate} 
          required 
          type="tel" 
          id="phone" 
          name="phone" 
          value={phone} 
          placeholder="Phone number 999-999-9999" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
      </label>
      <label>
        Email:
        <input 
          onChange={handleEmailUpdate}
          required type="email" id="email"
          name="email" 
          id="email"
          value={email} 
          placeholder="Email" />
      </label>
      <input id="submit" type="submit"></input>
    </form>
  );
};
