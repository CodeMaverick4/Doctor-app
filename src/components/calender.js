import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styling

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showCalender, setCalender] = useState(true)

  return (
    <div className={`  bg-white rounded-3`}>
      <div className="d-flex justify-content-between py-2 pt-3 px-3 border-bottom mb-1" onClick={() => setCalender(!showCalender)}>
        <span className="fw-bold fs-5">Calender</span>
        <ChevronDown style={{ transform: `rotate(${showCalender ? '0deg' : '180deg'})`, transition: 'transform 0.3s ease' }} />
      </div>
      <div className={` calendar-container ${showCalender ? "show" : ""} `}>
        <Calendar onChange={setDate} value={date} className="w-100 border-0" />
      </div>
    </div>
  )
};

export default MyCalendar;
