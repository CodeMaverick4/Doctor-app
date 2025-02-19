import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styling

const MyCalendar = ({showCalender}) => {
  const [date, setDate] = useState(new Date());
  
  return(
    <div className={`calendar-container ${showCalender ? "show" : ""}`}>
      <Calendar onChange={setDate} value={date} className="w-100 border-0" />
      </div>
  ) 
};

export default MyCalendar;
