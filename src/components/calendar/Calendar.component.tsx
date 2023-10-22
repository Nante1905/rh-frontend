import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.component.scss";

const Calendar = () => {
  const events = [
    { title: "Congé Koto", start: "2023-10-17", end: "2023-10-20" },
    { title: "Congé Naivo", start: "2023-10-17", end: "2023-10-24" },
  ];

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };
  return (
    <div className="calendar">
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height={"80%"}
        weekends={true}
        events={events}
        locale={"fr"}
        // eventOrder={"title"}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default Calendar;
