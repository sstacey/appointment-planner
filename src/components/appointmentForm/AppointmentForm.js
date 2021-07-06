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
      <label for="title">Title</label>
      <input type="text" onChange={handleTitleChange} required id="title" name="title"></input>
      <ContactPicker contacts={contacts} onChange={handleContactChange} />
      <label for="date">Title</label>
      <input type="date" onChange={handleDateChange} required id="date" name="date" min={getTodayString()}></input>
      <label for="time">Title</label>
      <input type="time" onChange={handleTimeChange} required id="time" name="time" min={getTodayString()}></input>
      <input type="submit"></input>
    </form>
  );
};
