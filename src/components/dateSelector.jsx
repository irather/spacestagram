import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../styles/dateSelector.css";

const DateSelector = (props) => {
  const maxDate = moment();
  maxDate.add(-1, "d");

  return (
    <div className="calendar-container">
      <h4>Please select a date from the calendar to view an APOD: </h4>
      <Calendar
        onChange={props.onChange}
        value={props.date}
        maxDate={maxDate.toDate()}
      />
    </div>
  );
};

export default DateSelector;
