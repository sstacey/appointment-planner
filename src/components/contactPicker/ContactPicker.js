import React from "react";

export const ContactPicker = ( { contacts, onChange }) => {

  const selectChoices = contacts.map(contact => <option value={contact.name}>{contact.name}</option>)
  
  return (
    <div>
      <label for="contact">Select a contact:</label>
      <select onChange={onChange} name="contact" id="contact">
        {selectChoices}
      </select>
    </div>
  );
};
