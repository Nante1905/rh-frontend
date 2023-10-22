/* eslint-disable @typescript-eslint/no-unused-vars */
import CongeCalendar from "../../components/conge-calendar/conge-calendar.component";
import "./conge-calendar-root.component.scss";

const CongeCalendarRoot = (props: any) => {
  const conges = props.conges;
  const error = props.error;

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

export default CongeCalendarRoot;
