import React, { useState } from "react";

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ( { appointments, contacts, addAppointment }) => {
  const [title, setTitle] = useState('')
  const [contact, setContact] = useState(contacts[0].name)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({title, contact, date, time})
    setTitle('')
    setContact(contacts[0].name)
    setDate('')
    setTime('')
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arr={appointments} />
      </section>
    </div>
  );
};
