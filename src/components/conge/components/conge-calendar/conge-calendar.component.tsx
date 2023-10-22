/* eslint-disable @typescript-eslint/no-unused-vars */
import FullCalendar from "@fullcalendar/react";
import "./conge-calendar.component.scss";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CongeMin } from "../../types/Conge";
import { useEffect, useState } from "react";

const CongeCalendar = (props: any) => {
  const [events, setEvents] = useState<any[]>([]);

  const conges: CongeMin[] = props.conges;
  console.log(conges);

  useEffect(() => {
    const tmpEvents: any[] = [];
    conges.map((c) => {
      tmpEvents.push({
        title: `${c.employe} - ${c.service} - ${c.motif}`,
        start: c.debut,
        end: new Date(c.fin).setDate(new Date(c.fin).getDate() + 1),
      });
    });
    console.log(tmpEvents.length);

    setEvents(tmpEvents);
  }, [props]);

  const renderEventContent = (event) => {
    return (
      <>
        <span className="event_title">{event.event.title}</span>
      </>
    );
  };
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height={"95%"}
        lazyFetching={true}
        weekends={true}
        events={events}
        locale={"fr"}
        eventOrder={"title"}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default CongeCalendar;
