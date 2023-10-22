import { useEffect, useState } from "react";
import "./rh-conge-calendar-root.component.scss";
import { CongeMin } from "../../types/Conge";
import { findValidConges } from "../../services/CongeService";
import CongeCalendarRoot from "../conge-calendar-root/conge-calendar-root.component";

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

  return <CongeCalendarRoot conges={conges} error={error} />;
};

export default RhCongeCalendarRoot;
