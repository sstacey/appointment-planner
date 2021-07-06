import React from "react";

import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = ({ target }) => {
    setTitle(target.value)
  }

  const handleContactChange = ({ target }) => {
    setContact(target.value)
  }

  const handleDateChange = ({ target }) => {
    setDate(target.value)
  }

  const handleTimeChange = ({ target }) => {
    setTime(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input 
          type="text" 
          onChange={handleTitleChange} 
          required 
          id="title" 
          name="title"
          placeholder="Title"
          value={title} />
      </label>
      <ContactPicker 
        contacts={contacts} 
        onChange={handleContactChange}
        contact={contact} />
      <label>
        Date:
        <input 
          type="date" 
          onChange={handleDateChange} 
          required 
          id="date" 
          name="date"
          min={getTodayString()}
          value={date} />
      </label>
      <label>
        Time:
        <input 
          type="time" 
          onChange={handleTimeChange} 
          required 
          id="time" 
          name="time" 
          min={getTodayString()}
          value={time} />
      </label>
      <input type="submit"></input>
    </form>
  );
};
