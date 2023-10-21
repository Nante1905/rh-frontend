import { useEffect, useState } from "react";
import "./rh-conge-calendar-root.component.scss";
import { CongeMin } from "../../types/Conge";
import { findValidConges } from "../../services/CongeService";
import CongeCalendar from "../../components/conge-calendar/conge-calendar.component";

const RhCongeCalendarRoot = () => {
  const [conges, setConges] = useState<CongeMin[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    findValidConges()
      .then((res) => {
        setConges(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger les données");
      });
  }, []);

  const render = () => {
    if (error) {
      return <p>{error}</p>;
    }
    if (conges != null) {
      //   console.log(conges);

      return <CongeCalendar conges={conges} />;
    }
  };

  return (
    <div className="conge_calendar">
      <h1 className="title">Calendrier de congés des employés</h1>
      {render()}
    </div>
  );
};

export default RhCongeCalendarRoot;
