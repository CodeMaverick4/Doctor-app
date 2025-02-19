import React, { useState } from 'react';
import UpcomingEvents from "../components/upcomming";
import BarChartComponent from "../components/barchart";
import MyCalendar from "../components/calender";
import { ChevronDown } from "lucide-react";
import {DOCTOR_IMAGE, CARD_UP_TREND, CARD_DOWN_TREND} from "../utils/images-constant.js"

export default function Dashboard() {
    const [showCalender, setCalender] = useState(true)

  return (
    <div className="d-flex flex-column flex-md-row gap-3 overflow-y-auto ">
          {/* total patient and bar chart  */}
          <div className="flex-grow-1 ">
      
            <p className='dashboard-hero-section-heading'>Good Morning <span className="fw-bold" >Advantal Clinic</span></p>
            {/* row 2  */}
            <div className=" bg-gradient-custom d-flex align-items-center py-4 position-relative">
              <div className="px-3 flex-grow-1">
                <div className="mb-5">
                  <h2 className="fw-semibold">Total Patient</h2>
                  <p className="fs-1 fw-bold">106</p>
                </div>

                <div className=" d-flex flex-column flex-md-row gap-3" >
                  {/* card 1  */}
                  <div className="d-flex flex-column justify-content-between rounded-4 p-3 card ">
                    <span className="fs-4 fw-medium" >Online</span>
                    <div className="d-flex justify-content-between ">
                      <span className="fw-bold fs-3">40</span>
                      <span className="card-trend card-green rounded-4 px-2 py-1 "><span className="fw-semibold  ">51%</span><img src={CARD_UP_TREND} alt="" /></span>
                    </div>
                  </div>

                  {/* card 2 */}
                  <div className="z-3 d-flex flex-column justify-content-between rounded-4 p-3 card ">
                    <span className="fs-4 fw-medium" >Offline</span>
                    <div className="d-flex justify-content-between ">
                      <span className="fw-bold fs-3">64</span>
                      <span className="card-trend card-red rounded-4 px-2 py-1 "><span className="fw-semibold ">20%</span><img src={CARD_DOWN_TREND} alt="" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" d-none d-xl-block  ">
                <img
                  src={DOCTOR_IMAGE}
                  alt="Patients"
                  className="end-0 position-absolute  "
                  style={{ bottom: '0px' }}
                />
              </div>
            </div>

            <BarChartComponent />
          </div>
        {/* calender and upcomming event   */}
          <div className=" border rounded-3 " >
            <div >
              <div className="d-flex justify-content-between py-2 pt-3 px-3 border-bottom mb-1" onClick={()=>setCalender(!showCalender)}>
                <span className="fw-bold fs-5">Calender</span>
                <ChevronDown className={` ${showCalender ? 'rotate-0': 'rotate-90'}`}/>
              </div>
              <MyCalendar  showCalender={showCalender}/>
            </div>
            <div className="mt-3">
              <UpcomingEvents />
            </div>
          </div>

        </div>
  )
}
