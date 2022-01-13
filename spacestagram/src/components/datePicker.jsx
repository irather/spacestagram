import React, { useState } from "react";
/*import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";*/

/*const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setDate} value={date} maxDate={new Date()} />
    </div>
  );
};*/

const DatePicker = (props) => (
  <form onSubmit={props.changeDate}>
    Enter a date (YYYY-MM-DD):
    <input />
    <input type="submit" />
  </form>
);

export default DatePicker;
