import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const DateSelector = (props) => {
  const maxDate = moment();
  maxDate.add(-1, "d");

  return (
    <div>
      <Calendar
        onChange={props.onChange}
        value={props.date}
        maxDate={maxDate.toDate()}
      />
    </div>
  );
};

export default DateSelector;
