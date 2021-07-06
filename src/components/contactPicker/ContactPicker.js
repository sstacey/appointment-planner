import React from "react";

export const ContactPicker = ( { contacts, onChange, contact }) => {

  const selectChoices = contacts.map((contact,i) => <option key={i} value={contact.name}>{contact.name}</option>)
  
  return (
      <label>
        Select a contact:
        <select value={contact} onChange={onChange} name="contact" id="contact">
          {selectChoices}
        </select>
      </label>
  );
};
